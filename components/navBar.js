import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Avatar, AppBar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Logo from "../components/logo";
import Search from "../components/search";
import { loginWithGithub, authStateChanged } from "../firebase/client";

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
  //states
  const [user, setUser] = useState();

  //functions
  const handlerClickAccount = () => {
    loginWithGithub();
  };

  //effect
  useEffect(() => {
    authStateChanged(setUser);
  }, []);

  return (
    <AppBar position="sticky">
      <Container fixed={false} maxWidth={false} className="containerNavBar">
        <Logo />
        <IconButton className={classes.menuButton}>
          <MenuIcon />
        </IconButton>

        <Search />
        <div className={classes.sectionDesktop}>
          {/* <IconButton>
            <Badge badgeContent={4}>
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={17}>
              <NotificationsIcon />
            </Badge>
          </IconButton> */}

          {user ? (
            <Avatar alt="user" src={user.avatar} />
          ) : (
            <IconButton onClick={handlerClickAccount}>
              <AccountCircle />
            </IconButton>
          )}
        </div>
      </Container>
    </AppBar>
  );
}
