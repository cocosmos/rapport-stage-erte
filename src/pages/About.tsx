import i18next from "i18next";
import { FunctionComponent, useEffect } from "react";

type AboutProps = {
  setHeaderTitle: (title: string) => void;
};

const About: FunctionComponent<AboutProps> = ({ setHeaderTitle }) => {
  useEffect(() => {
    setHeaderTitle(i18next.t("about"));
  }, [setHeaderTitle]);
  return <div>A Propos</div>;
};

export default About;
