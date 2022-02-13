import {
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import MoodBadIcon from "@mui/icons-material/MoodBad";

const DislikeCard = () => {
  const { t } = useTranslation();

  return (
    <Grid item xs={12} lg={6} xl={5}>
      <Card sx={{ maxWidth: "100%", minHeight: 450 }}>
        <CardContent sx={{ height: "100%" }}>
          <List>
            <Typography gutterBottom variant="h3">
              {t(`disliked.0`)}
            </Typography>
            <ListItem>
              <ListItemIcon>
                <MoodBadIcon color="error" />
              </ListItemIcon>
              <ListItemText primary={t(`disliked.1`)} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <MoodBadIcon color="error" />
              </ListItemIcon>
              <ListItemText primary={t(`disliked.2`)} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <MoodBadIcon color="error" />
              </ListItemIcon>
              <ListItemText primary={t(`disliked.3`)} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <MoodBadIcon color="error" />
              </ListItemIcon>
              <ListItemText primary={t(`disliked.4`)} />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default DislikeCard;
