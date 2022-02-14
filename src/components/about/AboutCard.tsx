import {
  Card,
  CardContent,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";

import { Trans, useTranslation } from "react-i18next";

import reactLogo from "./assets/react.svg";
import muiLogo from "./assets/mui.png";
import tsLogo from "./assets/typescript.png";

const AboutCard = () => {
  const { t } = useTranslation();
  return (
    <Grid item xs={12} lg={7} xl={6} sx={{ borderRadius: "50" }}>
      <Card sx={{ borderRadius: "30px", backgroundColor: "#190026" }}>
        <CardContent>
          <Typography variant="h3" color="secondary">
            {t("made_with")}
          </Typography>
          <Stack
            direction="row"
            sx={{ flexWrap: "wrap", justifyContent: "center", pb: 5, pt: 5 }}
          >
            <Stack
              direction="column"
              spacing={2}
              m={2}
              sx={{ alignItems: "center" }}
              width={150}
            >
              <img alt="React LOGO" src={reactLogo} width="100" />
              <Typography variant="body1">React</Typography>
            </Stack>
            <Stack
              direction="column"
              spacing={2}
              m={2}
              sx={{ alignItems: "center" }}
              width={150}
            >
              <img alt="Mui LOGO" src={muiLogo} width="100" />
              <Typography variant="body1">Mui</Typography>
            </Stack>
            <Stack
              direction="column"
              spacing={2}
              m={2}
              sx={{ alignItems: "center" }}
              width={150}
            >
              <img alt="Typescript LOGO" src={tsLogo} width="100" />
              <Typography variant="body1">Typescript</Typography>
            </Stack>
          </Stack>
          <Stack>
            <Typography
              className="specialNumber"
              variant="body1"
              color="secondary"
            >
              <Trans
                i18nKey="translated"
                components={[<strong>dummyChild</strong>]}
              />
            </Typography>
            <Typography
              className="specialNumber"
              variant="body1"
              color="secondary"
            >
              <Trans
                i18nKey="mode"
                components={[<strong>dummyChild</strong>]}
              />
            </Typography>
            <Typography variant="body1" color="secondary">
              {t("lastCommitsBy")}

              <Link
                href="https://docs.github.com/en/rest"
                target={"_blank"}
                underline="none"
                color={"#19cbd8"}
              >
                {"GitHub API"}
              </Link>
            </Typography>
            <Typography variant="body1" color="secondary">
              {t("avatarsBy")}

              <Link
                href="https://avatars.dicebear.com/"
                target={"_blank"}
                underline="none"
                color={"#19cbd8"}
              >
                {"DiceBear Avatars"}
              </Link>
            </Typography>
            <Typography
              className="specialNumber"
              variant="body1"
              color="secondary"
              mt={5}
            >
              {t("madeBy")}
              <strong> Mipam Guillot</strong>
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default AboutCard;
