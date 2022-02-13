import { Grid, Typography } from "@mui/material";
import i18next from "i18next";
import { FunctionComponent, useEffect } from "react";
import { useTranslation } from "react-i18next";
import DislikeCard from "../components/conclusion/DislikeCard";
import LikeCard from "../components/conclusion/LikeCard";
import NextCard from "../components/conclusion/NextCard";
import SkillsCard from "../components/conclusion/SkillsCard";

type ConclusionProps = {
  setHeaderTitle: (title: string) => void;
};

const Conclusion: FunctionComponent<ConclusionProps> = ({ setHeaderTitle }) => {
  useEffect(() => {
    setHeaderTitle(i18next.t("conclusion"));
  }, [setHeaderTitle]);
  const { t } = useTranslation();

  return (
    <Grid
      container
      spacing={3}
      p={1}
      textAlign="center"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid item xs={12} pb="50px">
        <Typography variant="h1" color="secondary">
          {t(`conclusion`)}
        </Typography>
      </Grid>
      <LikeCard />
      <DislikeCard />
      <SkillsCard />
      <NextCard />
    </Grid>
  );
};

export default Conclusion;
