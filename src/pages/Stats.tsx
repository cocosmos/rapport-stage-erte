import { FunctionComponent, useEffect } from "react";

type StatsProps = {
  setHeaderTitle: (title: string) => void;
};

const Stats: FunctionComponent<StatsProps> = ({ setHeaderTitle }) => {
  useEffect(() => {
    setHeaderTitle("Stats");
  }, [setHeaderTitle]);
  return <div>Stats</div>;
};

export default Stats;
