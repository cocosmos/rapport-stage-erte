import { FunctionComponent, useEffect } from "react";

type ProjectsProps = {
  setHeaderTitle: (title: string) => void;
};

const Projects: FunctionComponent<ProjectsProps> = ({ setHeaderTitle }) => {
  useEffect(() => {
    setHeaderTitle("Projects");
  }, [setHeaderTitle]);
  return <div>Projects</div>;
};

export default Projects;
