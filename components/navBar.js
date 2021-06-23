import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Logo from "../components/logo";
import Search from "../components/search";


const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  appBar: {
    background: "linear-gradient(0.25turn, black, #2196F3, #21CBF3)",
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
      <AppBar className={classes.appBar} position="fixed">
          <IconButton
            className={classes.menuButton}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Logo />
          <Search widthMobile="50%"/>
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
      </AppBar>
  );
}
