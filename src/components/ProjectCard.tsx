import Button from "@mui/material/Button";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { cardItems } from "./CardItems";
import BugReportIcon from "@mui/icons-material/BugReport";
import i18next from "i18next";

function ProjectCard() {
  return (
    <Grid container spacing={3} p={3}>
      {cardItems.map((element) => {
        return (
          <Grid item xs={12} lg={6} xl={4} key={element.id}>
            <Card
              sx={{
                /* maxWidth: 800 */
                minHeight: "550px",
              }}
            >
              <CardMedia
                component="img"
                height="100%"
                image={element.logo}
                alt={element.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                  {element.name}
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <BugReportIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={i18next.t(
                        `lists1Objects.${element.number}.list`
                      )}
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText
                      primary={i18next.t(
                        `lists2Objects.${element.number}.list`
                      )}
                    />
                  </ListItem>
                </List>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <IconButton
                  href={element.link}
                  target="_blank"
                  sx={{ mr: 2, color: "#fff" }}
                >
                  <OpenInBrowserIcon />
                </IconButton>

                <Button variant="contained" href={`projects/${element.id}`}>
                  En savoir plus
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
export default ProjectCard;
