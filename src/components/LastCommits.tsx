import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { grey } from "@mui/material/colors";
import {
  Alert,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const LastCommits = () => {
  const [commitsData, setcommitsData] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get("https://api.github.com/repos/cocosmos/mipam_movies/commits")
      .then((res) => setcommitsData(res.data));
  }, []);

  return (
    <List sx={{ width: "100%" }}>
      {commitsData.map((commit) => (
        <>
          <ListItem alignItems="flex-start" key={commit.sha}>
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
          <Divider variant="inset" component="li" />
        </>
      ))}
    </List>
  );
};

export default LastCommits;
