import { FunctionComponent, useEffect } from "react";

type AboutProps = {
  setHeaderTitle: (title: string) => void;
};

const About: FunctionComponent<AboutProps> = ({ setHeaderTitle }) => {
  useEffect(() => {
    setHeaderTitle("About");
  }, [setHeaderTitle]);
  return <div>A Propos</div>;
};

export default About;
