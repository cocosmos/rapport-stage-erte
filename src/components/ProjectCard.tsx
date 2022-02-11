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
import i18next from "i18next";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";
import Looks5Icon from "@mui/icons-material/Looks5";

function ProjectCard() {
  return (
    <Grid container spacing={2} p={2}>
      {cardItems.map((element) => {
        return (
          <Grid item xs={12} lg={6} xl={4} key={element.id}>
            <Card>
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
                  {i18next.t(`lists1Objects.${element.number}.list`) === "" ? (
                    ""
                  ) : (
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <LooksOneIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={i18next.t(
                          `lists1Objects.${element.number}.list`
                        )}
                      />
                    </ListItem>
                  )}
                  {i18next.t(`lists2Objects.${element.number}.list`) === "" ? (
                    ""
                  ) : (
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <LooksTwoIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={i18next.t(
                          `lists2Objects.${element.number}.list`
                        )}
                      />
                    </ListItem>
                  )}
                  {i18next.t(`lists3Objects.${element.number}.list`) === "" ? (
                    ""
                  ) : (
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <Looks3Icon />
                      </ListItemIcon>
                      <ListItemText
                        primary={i18next.t(
                          `lists3Objects.${element.number}.list`
                        )}
                      />
                    </ListItem>
                  )}
                  {i18next.t(`lists4Objects.${element.number}.list`) === "" ? (
                    ""
                  ) : (
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <Looks4Icon />
                      </ListItemIcon>
                      <ListItemText
                        primary={i18next.t(
                          `lists4Objects.${element.number}.list`
                        )}
                      />
                    </ListItem>
                  )}
                  {i18next.t(`lists5Objects.${element.number}.list`) === "" ? (
                    ""
                  ) : (
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <Looks5Icon />
                      </ListItemIcon>
                      <ListItemText
                        primary={i18next.t(
                          `lists5Objects.${element.number}.list`
                        )}
                      />
                    </ListItem>
                  )}
                </List>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <IconButton
                  href={element.link}
                  target="_blank"
                  sx={{ color: "#fff" }}
                >
                  <OpenInBrowserIcon />
                </IconButton>
                <Button variant="contained" href={`projects/${element.id}`}>
                  {i18next.t("see_the_website")}
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
