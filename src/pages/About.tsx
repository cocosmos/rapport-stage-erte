import { Button, Divider, Grid, Typography } from "@mui/material";
import i18next from "i18next";
import { FunctionComponent, useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import reactLogo from "../assets/react.svg";
import muiLogo from "../assets/mui.png";
import tsLogo from "../assets/typescript.png";

import LastCommits from "../components/LastCommits";

import GitHubIcon from "@mui/icons-material/GitHub";

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
      <Grid item xs={12}>
        <Typography variant="h3" color="secondary">
          {t("made_with")}
        </Typography>
      </Grid>
      <Grid item xs={12} xl={2}>
        <Typography variant="body1" color="secondary">
          React
        </Typography>
        <img src={reactLogo} alt="logo React" width={80} />
      </Grid>
      <Grid item xs={12} xl={2}>
        <Typography variant="body1" color="secondary">
          MUI
        </Typography>
        <img src={muiLogo} alt="logo React" width={80} />
      </Grid>
      <Grid item xs={12} xl={2}>
        <Typography variant="body1" color="secondary">
          Typescript
        </Typography>
        <img src={tsLogo} alt="logo typescript" width={70} />
      </Grid>
      <Divider />
      <Grid item xs={11}>
        <Typography className="specialNumber" variant="body1" color="secondary">
          <Trans
            i18nKey="translated"
            components={[<strong>dummyChild</strong>]}
            values={{ lang }}
          />
        </Typography>
      </Grid>
      <Grid item xs={11}>
        <Typography className="specialNumber" variant="body1" color="secondary">
          <Trans i18nKey="mode" components={[<strong>dummyChild</strong>]} />
        </Typography>
      </Grid>
      <Grid item xs={11}>
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
      <Grid item xs={10} mt={15}>
        <Button
          variant="contained"
          startIcon={<GitHubIcon />}
          target="_blank"
          href="https://github.com/cocosmos/rapport-stage-erte"
        >
          {t("code_on")}
        </Button>
      </Grid>
      <Grid item xs={10} mt={5}>
        <Typography variant="h3" color="secondary">
          {t("lastCommits")}
        </Typography>
        <LastCommits />
      </Grid>
    </Grid>
  );
};
export default About;
