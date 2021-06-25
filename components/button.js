import { Button, CircularProgress } from "@material-ui/core";

export default function ButtonCustom({loading, text, icon, disabled}) {

  return (
    <Button
      startIcon={icon ? icon : null}
      disabled={loading || disabled}
    >
      {text}
      {loading && (
        <CircularProgress size={24}/>
      )}
    </Button>
  );
}
