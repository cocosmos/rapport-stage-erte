import { Grid, Typography } from "@mui/material";
import i18next from "i18next";
import { FunctionComponent, useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import reactLogo from "../assets/react.svg";
import muiLogo from "../assets/mui.png";
import LastCommits from "../components/LastCommits";

type AboutProps = {
  setHeaderTitle: (title: string) => void;
};

const About: FunctionComponent<AboutProps> = ({ setHeaderTitle }) => {
  useEffect(() => {
    setHeaderTitle(i18next.t("about"));
  }, [setHeaderTitle]);
  const { t } = useTranslation();
  const lang = 6;

  return (
    <Grid container spacing={2} justifyContent="center" textAlign={"center"}>
      <Grid item xs={12} mb={10} mt={2}>
        <Typography variant="h1" color="secondary">
          {t("about_this_site")}
        </Typography>
      </Grid>
      <Grid item xs={12} xl={2}>
        <Typography variant="body1" color="secondary">
          {t("made_with_react")}
        </Typography>
        <img src={reactLogo} alt="logo React" width={80} />
      </Grid>
      <Grid item xs={12} xl={2}>
        <Typography variant="body1" color="secondary">
          {t("and_with_mui")}
        </Typography>
        <img src={muiLogo} alt="logo React" width={80} />
      </Grid>
      <Grid item xs={12}>
        <Typography className="specialNumber" variant="body1" color="secondary">
          <Trans
            i18nKey="translated"
            components={[<strong>dummyChild</strong>]}
            values={{ lang }}
          />
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className="specialNumber" variant="body1" color="secondary">
          <Trans i18nKey="mode" components={[<strong>dummyChild</strong>]} />
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className="specialNumber" variant="body1" color="secondary">
          <Trans
            i18nKey="lastCommitsBy"
            components={[<strong>dummyChild</strong>]}
          />
        </Typography>
      </Grid>
      <Grid item xs={12} mt={5}>
        <Typography className="specialNumber" variant="body1" color="secondary">
          <Trans i18nKey="madeby" components={[<strong>dummyChild</strong>]} />
        </Typography>
      </Grid>
      <Grid item xs={12} mt={15}>
        <Typography variant="h3" color="secondary">
          {t("lastCommits")}
        </Typography>
        <LastCommits />
      </Grid>
    </Grid>
  );
};
export default About;
