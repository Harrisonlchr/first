import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
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
      marginLeft: "25%",
    },
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Container fixed={false} maxWidth={false} className="containerNavBar">
        <Logo />
        <IconButton className={classes.menuButton}>
          <MenuIcon />
        </IconButton>

        <Search />
        <div className={classes.sectionDesktop}>
          <IconButton>
            <Badge badgeContent={4}>
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={17}>
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </div>
      </Container>
    </AppBar>
  );
}
