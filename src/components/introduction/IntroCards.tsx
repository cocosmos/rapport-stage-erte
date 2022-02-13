import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

import bcc from "./assets/bcc.png";
import mcc from "./assets/mcc.png";
import erte from "./assets/erte.png";
import dyna from "./assets/dyna.png";
import dvs from "./assets/dvs.png";
import { useTranslation } from "react-i18next";

type introItem = {
  id: string;
  img: string;
  name: string;
  link: string;
  text: number;
};
const introItems: introItem[] = [
  {
    id: "bcc",
    img: bcc,
    name: "Business Center Carouge",
    link: "https://www.erte.ch/",
    text: 0,
  },
  {
    id: "musicorner",
    img: mcc,
    name: "Musicorner",
    link: "https://musicorner.ch/",
    text: 1,
  },
  {
    id: "dyna",
    img: dyna,
    name: "Dynaflow",
    link: "https://dynaflow.ch/",
    text: 2,
  },
];

const IntroCards = () => {
  const { t } = useTranslation();
  return (
    <Grid
      container
      spacing={3}
      p={3}
      textAlign="center"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid item xs={12} lg={6} xl={5}>
        <Card sx={{ maxWidth: "100%", backgroundColor: "#0473FB" }}>
          <CardMedia component="img" alt="erte" image={erte} sx={{ p: 2 }} />
          <CardContent>
            <Typography gutterBottom variant="h3">
              Erte Ingénieurs Conseils SA
            </Typography>
            <Typography gutterBottom variant="body1">
              {t("introErte")}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={6} xl={4}>
        <Card sx={{ maxWidth: "100%", backgroundColor: "#59544c" }}>
          <CardMedia
            component="img"
            alt="Déjà Vu Switzerland"
            image={dvs}
            sx={{ p: 2 }}
          />
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              Déjà Vu Switzerland
            </Typography>
            <Typography gutterBottom variant="body1">
              {t("introDvs")}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {introItems.map((element) => {
        return (
          <Grid item xs={12} lg={6} xl={4} key={element.id}>
            <Card sx={{ maxWidth: "100%", minHeight: 550 }}>
              <CardMedia
                component="img"
                alt={element.name}
                image={element.img}
                sx={{ p: 2 }}
              />
              <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                  {element.name}
                </Typography>
                <Typography gutterBottom variant="h6">
                  Erte Ingénieurs Conseils SA
                </Typography>
                <Typography gutterBottom variant="body1">
                  {t(`othersIntro.${element.text}.intro`)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default IntroCards;
