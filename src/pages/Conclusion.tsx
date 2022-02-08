import i18next from "i18next";
import { FunctionComponent, useEffect } from "react";

type ConclusionProps = {
  setHeaderTitle: (title: string) => void;
};

const Conclusion: FunctionComponent<ConclusionProps> = ({ setHeaderTitle }) => {
  useEffect(() => {
    setHeaderTitle(i18next.t("conclusion"));
  }, [setHeaderTitle]);
  return <div>Beaucoup</div>;
};

export default Conclusion;
