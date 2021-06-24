import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: "1px solid #42424230",
    display: "flex",
    flexDirection: "row",
    padding: "0 2rem",
    justifyContent:"center"
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <h1> aqui va el footer</h1>
    </footer>
  );
}
