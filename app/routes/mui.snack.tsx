import { Snackbar, Button, Alert, AlertProps } from "@mui/material";
import { forwardRef, useState } from "react";

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnaBarAlert(props, ref) {
    return <Alert elevation={4} ref={ref} {...props} />;
  }
);

export default function Boks() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/* <Snackbar
        message="this is a snackbar message"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      /> */}

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose}>
          FormSubmitted successfully
        </SnackbarAlert>
      </Snackbar>
    </>
  );
}
