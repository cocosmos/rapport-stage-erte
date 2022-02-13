import { Button, Grid, Typography } from "@mui/material";
import i18next from "i18next";
import { FunctionComponent, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AboutCard from "../components/about/AboutCard";

import LastCommits from "../components/about/LastCommits";
import GitHubIcon from "@mui/icons-material/GitHub";

type AboutProps = {
  setHeaderTitle: (title: string) => void;
};

const About: FunctionComponent<AboutProps> = ({ setHeaderTitle }) => {
  useEffect(() => {
    setHeaderTitle(i18next.t("about"));
  }, [setHeaderTitle]);
  const { t } = useTranslation();

  return (
    <Grid container spacing={2} justifyContent="center" textAlign={"center"}>
      <Grid item xs={12} mb={5} mt={2}>
        <Typography variant="h1" color="secondary">
          {t("about_this_site")}
        </Typography>
      </Grid>
      <AboutCard />
      <Grid item xs={10} mt={4}>
        <Button
          variant="contained"
          startIcon={<GitHubIcon />}
          target="_blank"
          href="https://github.com/cocosmos/rapport-stage-erte"
        >
          {t("code_on")}
        </Button>
      </Grid>

      <LastCommits />
    </Grid>
  );
};
export default About;
