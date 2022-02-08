import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
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
  return <Grid container spacing={3} p={3} textAlign="center" justifyContent={"center"}>
    <Grid item xs={12} lg={6} xl={4}>
    <Avatar className="marginZero" alt="Patron" src="https://avatars.dicebear.com/api/bottts/SPOEhrle.svg"sx={{ width: 100, height: 100, mr:2 }}/>
    <Typography>Patron</Typography>
  </Grid>
  <Grid item xs={12} lg={6} xl={4}>
    <Avatar className="marginZero" alt="Collègue" src="https://avatars.dicebear.com/api/bottts/Collègue.svg"sx={{ width: 100, height: 100, mr:2 }}/>
    <Typography>Collègue</Typography>
  </Grid>
  <Grid item xs={12} lg={6} xl={4} >
    <Avatar className="marginZero" alt="Mipam Guillot" src="https://avatars.dicebear.com/api/bottts/Mipam Guillot.svg"sx={{ width: 100, height: 100, mr:2 }}/>
    <Typography>Mipam Guillot</Typography>
  </Grid>

  </Grid>
};

export default Introduction;
