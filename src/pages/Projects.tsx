import { FunctionComponent, useEffect } from "react";
import { useTranslation } from "react-i18next";

import ProjectCard from "../components/projectsCards/ProjectCard";

type ProjectsProps = {
  setHeaderTitle: (title: string) => void;
};

const Projects: FunctionComponent<ProjectsProps> = ({ setHeaderTitle }) => {
  const { t } = useTranslation();
  useEffect(() => {
    setHeaderTitle(t("projects"));
  }, [setHeaderTitle, t]);
  return (
    <div>
      <ProjectCard />
    </div>
  );
};

export default Projects;
