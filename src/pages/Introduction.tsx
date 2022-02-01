import { FunctionComponent, useEffect } from "react";

type IntroductionProps = {
  setHeaderTitle: (title: string) => void;
};

const Introduction: FunctionComponent<IntroductionProps> = ({
  setHeaderTitle,
}) => {
  useEffect(() => {
    setHeaderTitle("Introduction");
  }, [setHeaderTitle]);
  return <div>Introduction</div>;
};

export default Introduction;
