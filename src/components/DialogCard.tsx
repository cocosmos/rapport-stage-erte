import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";

const DialogCard = (props: any) => {
  const [open, setOpen] = useState(false);

  /*  const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper"); */

  const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
    setOpen(true);
    // setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
  /*  const descriptionElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]); */

  return (
    <Dialog
      fullWidth={true}
      maxWidth={"xl"}
      open={open}
      onClose={handleClose}
      /*    scroll={scroll} */
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">{/* {element.name} */}</DialogTitle>
      <DialogContent /* dividers={scroll === "paper"} */>
        {/*  <iframe
          title={element.name}
          src={element.link}
          frameBorder="0"
        ></iframe> */}
        <DialogContentText
          id="scroll-dialog-description"
          // ref={descriptionElementRef}
          tabIndex={-1}
        >
          <Typography variant="body1" color="text">
            {/*   {element.longText} */}
          </Typography>
          {/*  <img src={ImageErte} alt="" width={"100%"} /> */}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained">
          Fermer
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogCard;
