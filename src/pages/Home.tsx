import { useTranslation } from "react-i18next";
import { FunctionComponent, useEffect } from "react";
import i18next from "i18next";

import { Box } from "@mui/material";

type HomeProps = {
  setHeaderTitle: (title: string) => void;
};

const Home: FunctionComponent<HomeProps> = ({ setHeaderTitle }) => {
  useEffect(() => {
    setHeaderTitle(i18next.t("home"));
  }, [setHeaderTitle]);
  const { t } = useTranslation();
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      ></Box>
      <div className="App">
        <header className="App-header">
          {/* https://avatars.dicebear.com/api/avataaars/Mipam%20Guillot.svg?top[]=shortHair&facialHair[]=beardLight&facialHairChance=100&facialHairColor[]=black&clothes[]=blazerAndShirt&clothesColor[]=black&skin[]=pale */}
          {t("welcome")}
        </header>
      </div>
    </>
  );
};

export default Home;
