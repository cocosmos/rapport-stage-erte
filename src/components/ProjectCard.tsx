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
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks5Icon from '@mui/icons-material/Looks5';


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
                      <LooksOneIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={i18next.t(
                        `lists1Objects.${element.number}.list`
                      )}
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon><LooksTwoIcon/></ListItemIcon>
                    <ListItemText
                      primary={i18next.t(
                        `lists2Objects.${element.number}.list`
                      )}
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon><Looks3Icon/></ListItemIcon>
                    <ListItemText
                      primary={i18next.t(
                        `lists3Objects.${element.number}.list`
                      )}
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon><Looks4Icon/></ListItemIcon>
                    <ListItemText
                      primary={i18next.t(
                        `lists4Objects.${element.number}.list`
                      )}
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon><Looks5Icon/></ListItemIcon>
                    <ListItemText
                      primary={i18next.t(
                        `lists5Objects.${element.number}.list`
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
