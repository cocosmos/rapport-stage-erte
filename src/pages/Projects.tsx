import i18next from "i18next";
import { FunctionComponent, useEffect } from "react";

type ProjectsProps = {
  setHeaderTitle: (title: string) => void;
};

const Projects: FunctionComponent<ProjectsProps> = ({ setHeaderTitle }) => {
  useEffect(() => {
    setHeaderTitle(i18next.t("projects"));
  }, [setHeaderTitle]);
  return <div>Projects</div>;
};

export default Projects;
