import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: "1px solid #42424230",
  },
  containerFooter: {
    height: theme.heightContainerFooter,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container
        fixed={false}
        maxWidth={false}
        classes={{
          root: classes.containerFooter,
        }}
      >
        <h1> aqui va el footer</h1>
      </Container>
    </footer>
  );
}
