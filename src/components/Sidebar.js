import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/router";
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaPhoneSquareAlt, FaBlogger } from "react-icons/fa";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),

  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,

  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
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
}));

export default function Sidebar({ children }) {
  const theme = useTheme();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const navData = [
    {
      text: "Home",
      to: "/home",
      icon: (
        <AiFillHome
          size={24}
          color={router.pathname === "/home" ? "#fff" : "#93B3D8"}
        />
      ),
    },
    {
      text: "Projects",
      to: "/projects",
      icon: (
        <AiFillProject
          size={24}
          color={router.pathname === "/projects" ? "#fff" : "#93B3D8"}
        />
      ),
    },
    {
      text: "Contacts",
      to: "/contacts",
      icon: (
        <FaPhoneSquareAlt
          size={24}
          color={router.pathname === "/contacts" ? "#fff" : "#93B3D8"}
        />
      ),
    },
    {
      text: "About Me",
      to: "/about",
      icon: (
        <BsFillPersonFill
          size={24}
          color={router.pathname === "/about" ? "#fff" : "#93B3D8"}
        />
      ),
    },
    {
      text: "Blog",
      to: "/blog",
      icon: (
        <FaBlogger
          size={24}
          color={router.pathname === "/blog" ? "#fff" : "#93B3D8"}
        />
      ),
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon
              sx={{
                color: "#93B3D8",
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          boxShadow: "2px 0px 10px -1px rgba(12, 18, 24, 0.75)",
          backgroundColor: "#0F103F",
          borderRight: "none !important",
          height: "100%",
        }}
      >
        <DrawerHeader
          sx={{
            backgroundColor: "primary.main",
            color: "#fff",
            borderRight: "none",
          }}
        >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon
                sx={{
                  color: "#93B3D8",
                }}
              />
            ) : (
              <ChevronLeftIcon
                sx={{
                  color: "#93B3D8",
                }}
              />
            )}
          </IconButton>
        </DrawerHeader>

        <List
          sx={{
            height: "100%",
            color: "#fff",
            backgroundColor: "primary.main",
            borderRight: "none",
          }}
        >
          {navData.map((nav, index) => (
            <ListItemButton
              key={index}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                backgroundColor:
                  router.pathname === nav.to ? "active.main" : "transparent",
                img: {
                  color: "#fff",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {nav.icon}
              </ListItemIcon>
              <ListItemText primary={nav.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 10 }}>
        {children}
      </Box>
    </Box>
  );
}
