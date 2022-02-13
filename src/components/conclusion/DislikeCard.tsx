import {
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import MoodBadIcon from "@mui/icons-material/MoodBad";

const DislikeCard = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const error = theme.palette.error.main;
  return (
    <Grid item xs={12} lg={6} xl={5}>
      <Card sx={{ maxWidth: "100%", minHeight: 410 }}>
        <CardContent>
          <List>
            <Typography gutterBottom variant="h3">
              {t(`disliked.0`)}
            </Typography>
            <ListItem>
              <ListItemIcon>
                <MoodBadIcon color="error" />
              </ListItemIcon>
              <ListItemText
                primary={t(`disliked.1`)}
                style={{ color: error }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <MoodBadIcon color="error" />
              </ListItemIcon>
              <ListItemText
                primary={t(`disliked.2`)}
                style={{ color: error }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <MoodBadIcon color="error" />
              </ListItemIcon>
              <ListItemText
                primary={t(`disliked.3`)}
                style={{ color: error }}
                className="like"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <MoodBadIcon color="error" />
              </ListItemIcon>
              <ListItemText
                primary={t(`disliked.4`)}
                style={{ color: error }}
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default DislikeCard;
