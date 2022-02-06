import { useTranslation } from "react-i18next";
import { FunctionComponent, useEffect } from "react";
import i18next from "i18next";
import { Button, Grid, Typography } from "@mui/material";
import erte from "../assets/erte-ts.png";

type HomeProps = {
  setHeaderTitle: (title: string) => void;
  //setHandleChange: (value: string | null) => void;
};

const Home: FunctionComponent<HomeProps> = ({
  setHeaderTitle,
  // setHandleChange,
}) => {
  useEffect(() => {
    setHeaderTitle(i18next.t("home"));
  }, [setHeaderTitle]);
  const { t } = useTranslation();

  return (
    <>
      <Grid container spacing={5} justifyContent="center" textAlign={"center"}>
        <Grid item xs={12} sm={9} mb={5}>
          <Typography variant="h1" color="secondary">
            {t("rapport")}
          </Typography>
        </Grid>
        <Grid item xs={11} md={5}>
          <img src={erte} alt="erte logo" width="100%" height="100%" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" color="secondary">
            Mipam Guillot
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" color="secondary">
            02.08.2021 - 31.01.2022
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            href="introduction"
            color="secondary"
            sx={{ font: "large" }}
          >
            <Typography mr={1} variant="button" color="inherit">
              {i18next.t("introduction")}
            </Typography>
          </Button>
        </Grid>
      </Grid>

      {/* https://avatars.dicebear.com/api/avataaars/Mipam%20Guillot.svg?top[]=shortHair&facialHair[]=beardLight&facialHairChance=100&facialHairColor[]=black&clothes[]=blazerAndShirt&clothesColor[]=black&skin[]=pale */}
    </>
  );
};

export default Home;
