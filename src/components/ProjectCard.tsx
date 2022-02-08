import Button from "@mui/material/Button";
import LogoErte from "../assets/logo/erte.png";
import LogoMusicorner from "../assets/logo/mcc.png";
import LogoDynaflow from "../assets/logo/dynaflow.png";
import LogoBCC from "../assets/logo/bcc.png";
import LogoDvs from "../assets/logo/dvs.png";
import LogoDvh from "../assets/logo/dvh.png";
import LogoDvss from "../assets/logo/dvss.png";
import LogoDvc from "../assets/logo/dvc.png";
import ImageErte from "../assets/projects/erte-site.png";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

type cardItem = {
  id: number;
  logo: string;
  name: string;
  route: string;
  smallText: string;
  link: string;
  longText: string;
  imageSite: string;
};

const cardItems: cardItem[] = [
  {
    id: 1,
    logo: LogoErte,
    name: "Erte",
    route: "projects/erte",
    smallText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error voluptatibus tempore magnam illum aut beatae vero eius.",
    link: "https://www.erte.ch/",
    longText:
      "loremfdjsanfndasfndasjk nfads fdasjkf kdjsf dsakjnfkjadsf kjdsafn dasjkfn asdjnf kjdasfnadsjk fndsjkaf dasjnf dasjfn dasjf dasjkfndsa ",
    imageSite: ImageErte,
  },
  {
    id: 2,
    logo: LogoMusicorner,
    name: "Musicorner",
    route: "projects/musicorner",

    smallText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error voluptatibus tempore magnam illum aut beatae vero eius.",
    link: "https://musicorner.ch/",
    longText:
      "loremfdjsanfndasfndasjk nfads fdasjkf kdjsf dsakjnfkjadsf kjdsafn dasjkfn asdjnf kjdasfnadsjk fndsjkaf dasjnf dasjfn dasjf dasjkfndsa ",
    imageSite: "",
  },
  {
    id: 3,
    logo: LogoBCC,
    name: "Business Center Carouge",
    route: "projects/bcc",

    smallText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error voluptatibus tempore magnam illum aut beatae vero eius.",
    link: "https://bcc-urbanstudios.com/",
    longText:
      "loremfdjsanfndasfndasjk nfads fdasjkf kdjsf dsakjnfkjadsf kjdsafn dasjkfn asdjnf kjdasfnadsjk fndsjkaf dasjnf dasjfn dasjf dasjkfndsa ",
    imageSite: "",
  },
  {
    id: 4,
    logo: LogoDynaflow,
    name: "Dynaflow",
    route: "projects/dynaflow",

    smallText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error voluptatibus tempore magnam illum aut beatae vero eius.",
    link: "https://dynaflow.ch/",
    longText:
      "loremfdjsanfndasfndasjk nfads fdasjkf kdjsf dsakjnfkjadsf kjdsafn dasjkfn asdjnf kjdasfnadsjk fndsjkaf dasjnf dasjfn dasjf dasjkfndsa ",
    imageSite: "",
  },
  {
    id: 5,
    logo: LogoDvs,
    name: "Déjà Vu Switzerland",
    route: "projects/dvs",

    smallText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error voluptatibus tempore magnam illum aut beatae vero eius.",
    link: "https://deja-vu-switzerland.ch/",
    longText:
      "loremfdjsanfndasfndasjk nfads fdasjkf kdjsf dsakjnfkjadsf kjdsafn dasjkfn asdjnf kjdasfnadsjk fndsjkaf dasjnf dasjfn dasjf dasjkfndsa ",
    imageSite: "",
  },
  {
    id: 6,
    logo: LogoDvh,
    name: "Déjà Vu Home",
    route: "projects/dvh",

    smallText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error voluptatibus tempore magnam illum aut beatae vero eius.",
    link: "https://deja-vu-home.ch/",
    longText:
      "loremfdjsanfndasfndasjk nfads fdasjkf kdjsf dsakjnfkjadsf kjdsafn dasjkfn asdjnf kjdasfnadsjk fndsjkaf dasjnf dasjfn dasjf dasjkfndsa ",
    imageSite: "",
  },
  {
    id: 7,
    logo: LogoDvc,
    name: "Art Déjà Vu Collection",
    route: "projects/advc",

    smallText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error voluptatibus tempore magnam illum aut beatae vero eius.",
    link: "https://art.deja-vu-collection.com/",
    longText:
      "loremfdjsanfndasfndasjk nfads fdasjkf kdjsf dsakjnfkjadsf kjdsafn dasjkfn asdjnf kjdasfnadsjk fndsjkaf dasjnf dasjfn dasjf dasjkfndsa ",
    imageSite: "",
  },
  {
    id: 8,
    logo: LogoDvc,
    name: "Déjà Vu Collection",
    route: "projects/dvc",

    smallText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error voluptatibus tempore magnam illum aut beatae vero eius.",
    link: "https://deja-vu-collection.ch/",
    longText:
      "loremfdjsanfndasfndasjk nfads fdasjkf kdjsf dsakjnfkjadsf kjdsafn dasjkfn asdjnf kjdasfnadsjk fndsjkaf dasjnf dasjfn dasjf dasjkfndsa ",
    imageSite: "",
  },
  {
    id: 9,
    logo: LogoDvss,
    name: "Déjà Vu Services",
    route: "projects/dvss",

    smallText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error voluptatibus tempore magnam illum aut beatae vero eius.",
    link: "https://deja-vu-services.ch/",
    longText:
      "loremfdjsanfndasfndasjk nfads fdasjkf kdjsf dsakjnfkjadsf kjdsafn dasjkfn asdjnf kjdasfnadsjk fndsjkaf dasjnf dasjfn dasjf dasjkfndsa ",
    imageSite: "",
  },
];

function ScrollDialog() {
  return (
    <Grid container spacing={3} p={3}>
      {cardItems.map((element) => {
        return (
          <Grid item xs={12} lg={6} xl={4} key={element.id}>
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
                <Typography variant="body1"> {element.smallText}</Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <IconButton
                  href={element.link}
                  target="_blank"
                  sx={{ mr: 2, color: "#fff" }}
                >
                  <OpenInBrowserIcon />
                </IconButton>

                <Button variant="contained" href={element.route}>
                  En savoir plus
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
export default ScrollDialog;
