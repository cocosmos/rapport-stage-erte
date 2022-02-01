import { FunctionComponent, useEffect } from "react";

type ConclusionProps = {
  setHeaderTitle: (title: string) => void;
};

const Conclusion: FunctionComponent<ConclusionProps> = ({ setHeaderTitle }) => {
  useEffect(() => {
    setHeaderTitle("Conclusion");
  }, [setHeaderTitle]);
  return <div>Conclusion</div>;
};

export default Conclusion;
