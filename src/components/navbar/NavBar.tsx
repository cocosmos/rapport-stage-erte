import ChangeLanguage from "../i18next/ChangeLanguages";
import {
  IconButton,
  Toolbar,
  Typography,
  useTheme,
  AppBar,
  useMediaQuery,
  Box,
  Menu,
  Tooltip,
  Avatar,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FunctionComponent, useState } from "react";
import { FaEmpire, FaJedi } from "react-icons/fa";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import GavelRoundedIcon from "@mui/icons-material/GavelRounded";
import DescriptionIcon from "@mui/icons-material/Description";
import TemporaryNavBarDrawer from "./TemporaryNavBarDrawer";
import PermanentNavBarDrawer from "./PermanentNavBarDrawer";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import logo from "./logo512.png";

type menuItem = {
  name: string;
  link: string;
  icon: JSX.Element;
};

const menuItems: menuItem[] = [
  {
    name: "Home",
    link: "/",
    icon: <HomeIcon color="inherit" fontSize="inherit" />,
  },
  {
    name: "Introduction",
    link: "introduction",
    icon: <DescriptionIcon color="inherit" fontSize="inherit" />,
  },
  {
    name: "Projects",
    link: "projects",
    icon: <ListAltRoundedIcon color="inherit" fontSize="inherit" />,
  },
  {
    name: "Stats",
    link: "stats",
    icon: <QueryStatsRoundedIcon color="inherit" fontSize="inherit" />,
  },
  {
    name: "About",
    link: "about",
    icon: <InfoIcon color="inherit" fontSize="inherit" />,
  },
  {
    name: "Conclusion",
    link: "conclusion",
    icon: <GavelRoundedIcon color="inherit" fontSize="inherit" />,
  },
];

type NavBarProps = {
  title: string;
  toggleMode: () => void;
};

const NavBar: FunctionComponent<NavBarProps> = ({ title, toggleMode }) => {
  const theme = useTheme();

  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const isDownMD = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar
        position="fixed"
        color="inherit"
        enableColorOnDark
        sx={{
          ...(!isDownMD && {
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }),
          boxShadow: "none",
          backgroundImage: "none",
          backgroundColor: theme.palette.background.default,
          maxHeight: "6vh",
        }}
      >
        <Toolbar>
          <IconButton
            color="secondary"
            aria-label="Open Navigation"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="secondary" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Typography variant="body2" color="#fff" mr={1}>
            Mipam Guillot
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Mipam Guillot"
                  src={logo}
                  sx={{ width: 56, height: 56 }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{
                mt: "45px",
              }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <Button
                  variant="contained"
                  onClick={toggleMode}
                  sx={{
                    fontSize: "18px",
                    fontWeight: "700",
                  }}
                  startIcon={
                    theme.palette.mode === "dark" ? (
                      <FaEmpire size="35px" />
                    ) : (
                      <FaJedi size="35px" />
                    )
                  }
                >
                  {theme.palette.mode === "dark" ? "Dark Side" : "Light Side"}
                </Button>
              </MenuItem>
              <MenuItem sx={{ flexDirection: "column" }}>
                <ChangeLanguage />
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      {isDownMD ? (
        <TemporaryNavBarDrawer
          open={drawerOpen}
          onClose={handleDrawerClose}
          menuItems={menuItems}
        />
      ) : (
        <PermanentNavBarDrawer
          open={drawerOpen}
          onClose={handleDrawerClose}
          menuItems={menuItems}
        />
      )}
    </>
  );
};

export default NavBar;
