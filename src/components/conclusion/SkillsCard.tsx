import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import wordpress from "./logo/wordpress.png";
import html from "./logo/html.png";
import css from "./logo/css.png";
import js from "./logo/js.png";
import php from "./logo/php.png";
import management from "./logo/management.png";
import react from "./logo/react.png";
import ts from "./logo/ts.png";

const SkillsCard = () => {
  const { t } = useTranslation();

  return (
    <Grid item xs={12} lg={12} xl={11}>
      <Card
        sx={{
          maxWidth: "100%",
          minHeight: 410,
          backgroundColor: "#000942",
          borderRadius: 20,
          mt: 5,
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h3" mb={5} mt={5}>
            {t(`skills.0`)}
          </Typography>
          <Stack
            direction="row"
            sx={{ flexWrap: "wrap", justifyContent: "center" }}
          >
            {itemData.map((element) => {
              return (
                <Stack
                  direction="column"
                  spacing={2}
                  m={2}
                  sx={{ alignItems: "center" }}
                  key={element.id}
                  width={150}
                >
                  <Avatar
                    alt={t(`skills.${element.id}`)}
                    src={element.img}
                    sx={{ width: 100, height: 100 }}
                  />
                  <Typography variant="body1">
                    {t(`skills.${element.id}`)}
                  </Typography>
                </Stack>
              );
            })}
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SkillsCard;

const itemData = [
  {
    img: wordpress,
    id: 1,
  },
  {
    img: html,
    id: 2,
  },
  {
    img: css,
    id: 3,
  },
  {
    img: js,
    id: 4,
  },
  {
    img: php,
    id: 5,
  },
  {
    img: management,
    id: 6,
  },
  {
    img: react,
    id: 7,
  },
  {
    img: ts,
    id: 8,
  },
];
