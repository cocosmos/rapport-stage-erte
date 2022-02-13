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
import MoodIcon from "@mui/icons-material/Mood";

const LikeCard = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const success = theme.palette.success.main;
  return (
    <Grid item xs={12} lg={6} xl={5}>
      <Card sx={{ maxWidth: "100%", minHeight: 410 }}>
        <CardContent>
          <List>
            <Typography gutterBottom variant="h3">
              {t(`liked.0`)}
            </Typography>
            <ListItem>
              <ListItemIcon>
                <MoodIcon color="success" />
              </ListItemIcon>
              <ListItemText primary={t(`liked.1`)} style={{ color: success }} />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <MoodIcon color="success" />
              </ListItemIcon>
              <ListItemText primary={t(`liked.2`)} style={{ color: success }} />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <MoodIcon color="success" />
              </ListItemIcon>
              <ListItemText primary={t(`liked.3`)} style={{ color: success }} />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <MoodIcon color="success" />
              </ListItemIcon>
              <ListItemText primary={t(`liked.4`)} style={{ color: success }} />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default LikeCard;
