import * as React from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import LogoErte from "../assets/logo/erte.png";
import LogoMusicorner from "../assets/logo/mcc.png";
import LogoDynaflow from "../assets/logo/dynaflow.png";
import LogoBCC from "../assets/logo/bcc.png";
import LogoDvs from "../assets/logo/dvs.png";
import LogoDvh from "../assets/logo/dvh.png";
import LogoDvss from "../assets/logo/dvss.png";
import LogoDvc from "../assets/logo/dvc.png";
import ImageErte from "../assets/projects/erte-site.png";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

type cardItem = {
  logo: string;
  name: string;
  smallText: string;
  link: string;
  longText: string;
  imageSite: string;
};

const cardItems: cardItem[] = [
  {
    logo: LogoErte,
    name: "Erte",
    smallText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error voluptatibus tempore magnam illum aut beatae vero eius.",
    link: "https://www.erte.ch/",
    longText:
      "loremfdjsanfndasfndasjk nfads fdasjkf kdjsf dsakjnfkjadsf kjdsafn dasjkfn asdjnf kjdasfnadsjk fndsjkaf dasjnf dasjfn dasjf dasjkfndsa ",
    imageSite: ImageErte,
  },
  {
    logo: LogoMusicorner,
    name: "Musicorner",
    smallText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error voluptatibus tempore magnam illum aut beatae vero eius.",
    link: "https://www.musicorner.ch/",
    longText:
      "loremfdjsanfndasfndasjk nfads fdasjkf kdjsf dsakjnfkjadsf kjdsafn dasjkfn asdjnf kjdasfnadsjk fndsjkaf dasjnf dasjfn dasjf dasjkfndsa ",
    imageSite: ImageErte,
  },
  {
    logo: LogoBCC,
    name: "Business Center Carouge",
    smallText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error voluptatibus tempore magnam illum aut beatae vero eius.",
    link: "https://www.bcc-urbanstudios.com/",
    longText:
      "loremfdjsanfndasfndasjk nfads fdasjkf kdjsf dsakjnfkjadsf kjdsafn dasjkfn asdjnf kjdasfnadsjk fndsjkaf dasjnf dasjfn dasjf dasjkfndsa ",
    imageSite: ImageErte,
  },
  {
    logo: LogoDynaflow,
    name: "Dynaflow",
    smallText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error voluptatibus tempore magnam illum aut beatae vero eius.",
    link: "https://www.dynaflow.ch/",
    longText:
      "loremfdjsanfndasfndasjk nfads fdasjkf kdjsf dsakjnfkjadsf kjdsafn dasjkfn asdjnf kjdasfnadsjk fndsjkaf dasjnf dasjfn dasjf dasjkfndsa ",
    imageSite: ImageErte,
  },
  {
    logo: LogoDvs,
    name: "Déjà Vu Switzerland",
    smallText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error voluptatibus tempore magnam illum aut beatae vero eius.",
    link: "https://deja-vu-switzerland.ch/",
    longText:
      "loremfdjsanfndasfndasjk nfads fdasjkf kdjsf dsakjnfkjadsf kjdsafn dasjkfn asdjnf kjdasfnadsjk fndsjkaf dasjnf dasjfn dasjf dasjkfndsa ",
    imageSite: ImageErte,
  },
  {
    logo: LogoDvh,
    name: "Déjà Vu Home",
    smallText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error voluptatibus tempore magnam illum aut beatae vero eius.",
    link: "https://deja-vu-home.ch/",
    longText:
      "loremfdjsanfndasfndasjk nfads fdasjkf kdjsf dsakjnfkjadsf kjdsafn dasjkfn asdjnf kjdasfnadsjk fndsjkaf dasjnf dasjfn dasjf dasjkfndsa ",
    imageSite: ImageErte,
  },
  {
    logo: LogoDvc,
    name: "Art Déjà Vu Collection",
    smallText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error voluptatibus tempore magnam illum aut beatae vero eius.",
    link: "https://art.deja-vu-collection.com/",
    longText:
      "loremfdjsanfndasfndasjk nfads fdasjkf kdjsf dsakjnfkjadsf kjdsafn dasjkfn asdjnf kjdasfnadsjk fndsjkaf dasjnf dasjfn dasjf dasjkfndsa ",
    imageSite: ImageErte,
  },
  {
    logo: LogoDvss,
    name: "Déjà Vu Services",
    smallText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error voluptatibus tempore magnam illum aut beatae vero eius.",
    link: "https://deja-vu-services.ch/",
    longText:
      "loremfdjsanfndasfndasjk nfads fdasjkf kdjsf dsakjnfkjadsf kjdsafn dasjkfn asdjnf kjdasfnadsjk fndsjkaf dasjnf dasjfn dasjf dasjkfndsa ",
    imageSite: ImageErte,
  },
];

function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");

  const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <Grid container spacing={3} p={3}>
      {cardItems.map((element) => {
        return (
          <Grid item xs={12} lg={6} xl={4} key={element.name}>
            <Card
              sx={{
                /* maxWidth: 800 */
                minHeight: "500px",
              }}
            >
              <CardMedia
                component="img"
                height="100%"
                image={element.logo}
                alt="dynaflow"
              />
              <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                  {element.name}
                </Typography>
                <Typography variant="body1">
                {element.smallText}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  href="https://www.erte.ch/"
                  target="_blank"
                  sx={{ mr: 2 }}
                >
                  Voir le site
                </Button>
                <Button onClick={handleClickOpen("paper")} variant="contained">
                  En savoir plus
                </Button>
              </CardActions>
            </Card>
            <Dialog
              fullWidth={true}
              maxWidth={"xl"}
              open={open}
              onClose={handleClose}
              scroll={scroll}
              aria-labelledby="scroll-dialog-title"
              aria-describedby="scroll-dialog-description"
            >
              <DialogTitle id="scroll-dialog-title">{element.name}</DialogTitle>
              <DialogContent dividers={scroll === "paper"}>
                <DialogContentText
                  id="scroll-dialog-description"
                  ref={descriptionElementRef}
                  tabIndex={-1}
                >
                  <Typography variant="body1" color="text">
                   {element.longText}
                  </Typography>
                  <img src={ImageErte} alt="" width={"100%"} />                                                                                  
                  <iframe src={element.link} title={element.name} frameBorder="0" width="100%" height="800"></iframe>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} variant="contained">
                  Fermer
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        );
      })}
    </Grid>
  );
}
export default ScrollDialog;
