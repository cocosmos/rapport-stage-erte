import i18next from "i18next";
import { FunctionComponent, useEffect } from "react";
import IntroCards from "../components/IntroCards";

type IntroductionProps = {
  setHeaderTitle: (title: string) => void;
};

const Introduction: FunctionComponent<IntroductionProps> = ({
  setHeaderTitle,
}) => {
  useEffect(() => {
    setHeaderTitle(i18next.t("introduction"));
  }, [setHeaderTitle]);
  return <IntroCards />;
};

export default Introduction;
