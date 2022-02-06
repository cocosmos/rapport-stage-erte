import i18next from "i18next";
import { FunctionComponent, useEffect } from "react";

type LearnedProps = {
  setHeaderTitle: (title: string) => void;
};

const Learned: FunctionComponent<LearnedProps> = ({ setHeaderTitle }) => {
  useEffect(() => {
    setHeaderTitle(i18next.t("learned"));
  }, [setHeaderTitle]);
  return <div>learned</div>;
};

export default Learned;
