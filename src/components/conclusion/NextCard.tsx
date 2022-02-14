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
import BusinessIcon from "@mui/icons-material/Business";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CodeIcon from "@mui/icons-material/Code";

const NextCard = () => {
  const { t } = useTranslation();

  return (
    <Grid item xs={12} lg={8} xl={5}>
      <Card
        sx={{
          maxWidth: "100%",
          minHeight: 410,
          backgroundColor: "#190026",
          borderRadius: 5,
          mt: 5,
          mb: 5,
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h3" mb={5} mt={5}>
            {t(`myNextIntern.0`)}
          </Typography>
          <List>
            {itemData.map((element) => {
              return (
                <ListItem>
                  <ListItemIcon>{element.icon}</ListItemIcon>
                  <ListItemText primary={t(`myNextIntern.${element.id}`)} />
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default NextCard;

const itemData = [
  {
    id: 1,
    icon: <BusinessIcon color="warning" />,
  },
  {
    id: 2,
    icon: <CodeIcon color="info" />,
  },
  {
    id: 3,
    icon: <SchoolIcon color="success" />,
  },
  {
    id: 4,
    icon: <SmartToyIcon color="error" />,
  },
];
