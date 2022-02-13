import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { grey } from "@mui/material/colors";
import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const LastCommits = () => {
  const [commitsData, setcommitsData] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get("https://api.github.com/repos/cocosmos/rapport-stage-erte/commits")
      .then((res) => setcommitsData(res.data));
  }, []);
  const { t } = useTranslation();

  return (
    <Grid item xs={10} mt={5}>
      <Typography variant="h3" color="secondary">
        {t("lastCommits")}
      </Typography>
      <List sx={{ width: "100%" }}>
        {commitsData.map((commit) => (
          <ListItem key={commit.sha}>
            <ListItemText
              primary={commit.commit.message}
              sx={{ textAlign: "center" }}
              secondary={
                <Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body1"
                    color={grey[500]}
                  >
                    {commit.commit.author.date}
                  </Typography>
                </Fragment>
              }
            />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default LastCommits;
