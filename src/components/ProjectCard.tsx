import Button from "@mui/material/Button";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { cardItems } from "./CardItems";

function ProjectCard() {
  return (
    <Grid container spacing={3} p={3}>
      {cardItems.map((element) => {
        return (
          <Grid item xs={12} lg={6} xl={4} key={element.id}>
            <Card
              sx={{
                /* maxWidth: 800 */
                minHeight: "500px",
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
                <Typography variant="body1"> {element.smallText}</Typography>
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
