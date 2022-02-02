import {
  Divider,
  styled,
  useTheme,
  Button,
  ListItem,
  List,
  Typography,
  Drawer,
  IconButton,
} from "@mui/material";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

import { ChevronLeft } from "@mui/icons-material";
import i18next from "i18next";

type menuItem = {
  name: string;
  link: string;
  icon: JSX.Element;
};

type DrawerProps = {
  open: boolean;
  onClose: () => void;
  menuItems: menuItem[];
};

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const TemporaryNavBarDrawer: FunctionComponent<DrawerProps> = ({
  open,
  onClose,
  menuItems,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleNavigate = (to: string) => {
    navigate(to);
    onClose();
  };

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      anchor="left"
      sx={{
        boxShadow: "none",
        backgroundImage: "none",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <DrawerHeader theme={theme}>
        <IconButton onClick={onClose} color="primary">
          <ChevronLeft />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <ListItem alignItems="flex-start"></ListItem>
      </List>
      <List>
        {menuItems.map((element) => {
          return (
            <ListItem key={i18next.t(element.name)} alignItems="flex-start">
              <Button
                onClick={() => handleNavigate(element.link)}
                variant="contained"
                color="primary"
                sx={{
                  padding: 0,
                  minWidth: "fit-content",
                }}
              >
                <Typography
                  m={1}
                  variant="h5"
                  color="inherit"
                  display="flex"
                  alignSelf="center"
                >
                  {element.icon}
                </Typography>
                <Typography mr={1} variant="button" color="inherit">
                  {i18next.t(element.name)}
                </Typography>
              </Button>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default TemporaryNavBarDrawer;
