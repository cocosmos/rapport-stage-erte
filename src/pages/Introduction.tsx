import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import i18next from "i18next";
import { FunctionComponent, useEffect } from "react";

type IntroductionProps = {
  setHeaderTitle: (title: string) => void;
};

const Introduction: FunctionComponent<IntroductionProps> = ({
  setHeaderTitle,
}) => {
  useEffect(() => {
    setHeaderTitle(i18next.t("introduction"));
  }, [setHeaderTitle]);
  return (
    <Grid
      container
      spacing={3}
      p={3}
      textAlign="center"
      justifyContent={"center"}
    >
      <Grid item xs={12} justifyContent={"center"}>
        <Card sx={{ maxWidth: 150 }}>
          <CardMedia
            component="img"
            alt="Patron"
            image="https://avatars.dicebear.com/api/bottts/SPOEhrle.svg"
            sx={{ p: 2 }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Patron
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {/*  <Grid item xs={12} lg={6} xl={4}>
        <Avatar
          className="marginZero"
          alt="Collègue"
          src="https://avatars.dicebear.com/api/bottts/Collègue.svg"
          sx={{ width: 100, height: 100 }}
        />
        <Typography>Collègue</Typography>
      </Grid>
      <Grid item xs={12} lg={6} xl={4}>
        <Avatar
          className="marginZero"
          alt="Mipam Guillot"
          src="https://avatars.dicebear.com/api/bottts/Mipam Guillot.svg"
          sx={{ width: 100, height: 100 }}
        />
        <Typography>Mipam Guillot</Typography>
      </Grid> */}
    </Grid>
  );
};

export default Introduction;
