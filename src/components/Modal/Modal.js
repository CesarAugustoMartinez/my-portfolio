import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import myResume from "../../docs/ResumeCesarMartinez.pdf";

function Modal(props) {
  const fullwidth = true;

  return (
    <Dialog
      onClose={props.handleClose}
      aria-labelledby="customized-dialog-title"
      open={props.open}
      fullWidth={fullwidth}
      maxWidth="md"
    >
      <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
        My Resume
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          <iframe
            title="myResume"
            src={myResume}
            width="100%"
            height="500px"
            allowfullscreen
          ></iframe>
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Modal;
