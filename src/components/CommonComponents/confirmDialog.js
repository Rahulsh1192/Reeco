import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog({
  data,
  open,
  handleClickOpen,
  handleClose,
}) {
  console.log(data);
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Missing Product"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {`is ${data.name} urgent?`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose("missing")}>No</Button>
          <Button onClick={() => handleClose("missing_urgent")} autoFocus>
            yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
