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
  link: string;
  number: number;
};
export const cardItems: cardItem[] = [
  {
    id: "erte",
    logo: LogoErte,
    name: "Erte",
    link: "https://www.erte.ch/",

    number: 0,
  },
  {
    id: "musicorner",
    logo: LogoMusicorner,
    name: "Musicorner",
    link: "https://musicorner.ch/",

    number: 1,
  },
  {
    id: "bcc",
    logo: LogoBCC,
    name: "Business Center Carouge",
    link: "https://bcc-urbanstudios.com/",

    number: 2,
  },
  {
    id: "dynaflow",
    logo: LogoDynaflow,

    name: "Dynaflow",

    link: "https://dynaflow.ch/",

    number: 3,
  },
  {
    id: "deja-vu-switzerland",
    logo: LogoDvs,

    name: "Déjà Vu Switzerland",

    link: "https://deja-vu-switzerland.ch/",

    number: 4,
  },
  {
    id: "deja-vu-home",
    logo: LogoDvh,
    name: "Déjà Vu Home",
    link: "https://deja-vu-home.ch/",

    number: 5,
  },
  {
    id: "art-deja-vu-collection",
    logo: LogoDvc,
    name: "Art Déjà Vu Collection",
    link: "https://art.deja-vu-collection.com/",

    number: 6,
  },
  {
    id: "deja-vu-collection",
    logo: LogoDvc,

    name: "Déjà Vu Collection",

    link: "https://deja-vu-collection.ch/",

    number: 7,
  },
  {
    id: "deja-vu-services",
    logo: LogoDvss,

    name: "Déjà Vu Services",

    link: "https://deja-vu-services.ch/",

    number: 8,
  },
];
