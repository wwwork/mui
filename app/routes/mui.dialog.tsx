import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useState } from "react";

export default function DialogDemo() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      <Dialog open={open}>
        <DialogTitle>Lorem title</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            maiores quo expedita porro quidem, totam reprehenderit! Placeat
            nostrum ab minima optio ullam cum recusandae quibusdam, quidem
            fugiat non blanditiis. Enim.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Submit</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
