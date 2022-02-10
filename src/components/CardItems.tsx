import LogoErte from "../assets/logo/erte.png";
import LogoMusicorner from "../assets/logo/mcc.png";
import LogoDynaflow from "../assets/logo/dynaflow.png";
import LogoBCC from "../assets/logo/bcc.png";
import LogoDvs from "../assets/logo/dvs.png";
import LogoDvh from "../assets/logo/dvh.png";
import LogoDvss from "../assets/logo/dvss.png";
import LogoDvc from "../assets/logo/dvc.png";

type cardItem = {
  id: string;
  logo: string;
  name: string;
  smallText: string;
  link: string;
  longText: string;
  imageSite: string;
};
export const cardItems: cardItem[] = [
  {
    id: "erte",
    logo: LogoErte,
    name: "Erte",
    smallText:"test",
    link: "https://www.erte.ch/",
    longText:"",
    imageSite: "",
  },
  {
    id: "musicorner",
    logo: LogoMusicorner,

    name: "Musicorner",

    smallText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error voluptatibus tempore magnam illum aut beatae vero eius.",
    link: "https://musicorner.ch/",
    longText:"",
    imageSite: "",
  },
  {
    id: "bcc",
    logo: LogoBCC,

    name: "Business Center Carouge",

    smallText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error voluptatibus tempore magnam illum aut beatae vero eius.",
    link: "https://bcc-urbanstudios.com/",
    longText:"",

    imageSite: "",
  },
  {
    id: "dynaflow",
    logo: LogoDynaflow,

    name: "Dynaflow",

    smallText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error voluptatibus tempore magnam illum aut beatae vero eius.",
    link: "https://dynaflow.ch/",
    longText:"",

    imageSite: "",
  },
  {
    id: "deja-vu-switzerland",
    logo: LogoDvs,

    name: "Déjà Vu Switzerland",
    smallText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error voluptatibus tempore magnam illum aut beatae vero eius.",
    link: "https://deja-vu-switzerland.ch/",
    longText:"",
    imageSite: "",
  },
  {
    id: "deja-vu-home",
    logo: LogoDvh,

    name: "Déjà Vu Home",

    smallText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error voluptatibus tempore magnam illum aut beatae vero eius.",
    link: "https://deja-vu-home.ch/",
    longText:"",
    imageSite: "",
  },
  {
    id: "art-deja-vu-collection",
    logo: LogoDvc,

    name: "Art Déjà Vu Collection",

    smallText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error voluptatibus tempore magnam illum aut beatae vero eius.",
    link: "https://art.deja-vu-collection.com/",
    longText: "",
    imageSite: "",
  },
  {
    id: "deja-vu-collection",
    logo: LogoDvc,

    name: "Déjà Vu Collection",

    smallText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error voluptatibus tempore magnam illum aut beatae vero eius.",
    link: "https://deja-vu-collection.ch/",
    longText:"",
    imageSite: "",
  },
  {
    id: "deja-vu-services",
    logo: LogoDvss,

    name: "Déjà Vu Services",

    smallText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error voluptatibus tempore magnam illum aut beatae vero eius.",
    link: "https://deja-vu-services.ch/",
    longText:"",
    imageSite: "",
  },
];
