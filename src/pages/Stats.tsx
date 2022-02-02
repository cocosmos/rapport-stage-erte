import i18next from "i18next";
import { FunctionComponent, useEffect } from "react";

type StatsProps = {
  setHeaderTitle: (title: string) => void;
};

const Stats: FunctionComponent<StatsProps> = ({ setHeaderTitle }) => {
  useEffect(() => {
    setHeaderTitle(i18next.t("stats"));
  }, [setHeaderTitle]);
  return <div>Stats</div>;
};

export default Stats;
