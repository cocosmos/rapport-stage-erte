import {
  styled,
  Button,
  ListItem,
  List,
  Typography,
  Theme,
  CSSObject,
  Tooltip,
} from "@mui/material";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

import MuiDrawer from "@mui/material/Drawer";

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

const drawerWidth = 300;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  border: "none",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  border: "none",
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop: any) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
  boxShadow: "none",
  backgroundImage: "none",
}));

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const PermanentNavBarDrawer: FunctionComponent<DrawerProps> = ({
  open,
  onClose,
  menuItems,
}) => {
  const navigate = useNavigate();

  const handleNavigate = (to: string) => {
    navigate(to);
  };

  return (
    <Drawer variant="permanent" onClose={onClose} open={open} anchor="left">
      <Offset />
      <List>
        <ListItem alignItems="flex-start"></ListItem>
      </List>
      <List>
        {menuItems.map((element) => {
          return (
            <ListItem key={element.name} alignItems="flex-start">
              <Tooltip title={open ? "" : element.name} arrow placement="right">
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
                    m={1.2}
                    variant="h5"
                    color="inherit"
                    display="flex"
                    alignSelf="center"
                    sx={{
                      padding: 0,
                      minWidth: "fit-content",
                    }}
                  >
                    {element.icon}
                  </Typography>
                  {open && (
                    <Typography mr={1} variant="button" color="inherit">
                      {element.name}
                    </Typography>
                  )}
                </Button>
              </Tooltip>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default PermanentNavBarDrawer;
