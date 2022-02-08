import { Grid, Stack, Typography } from "@mui/material";
import { FunctionComponent, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { cardItems } from "./CardItems";

let data: any;
data = "";

type ProjectsTemplateProps = {
  setHeaderTitle: (title: string) => void;
};

const ProjectsTemplate: FunctionComponent<ProjectsTemplateProps> = ({
  setHeaderTitle,
}) => {
  useEffect(() => {
    setHeaderTitle(data.name);
  }, [setHeaderTitle]);
  const { t } = useTranslation();
  const { projectsId } = useParams();

  for (let i = 0; i < cardItems.length; i++) {
    if (projectsId === cardItems[i].id) {
      data = cardItems[i];
    }
  }

  return !data ? (
    <Stack
      className="error"
      justifyContent={"center"}
      width={"100%"}
      height={"100%"}
    >
      <Typography variant="h1" color="primary" align="center">
        {t("error")}
      </Typography>
    </Stack>
  ) : (
    <Grid container height={"100%"}>
      <Grid item xs={12} key={data.id}>
        <iframe
          title="1"
          src={data.link}
          frameBorder="0"
          width={"100%"}
          height={"100%"}
        ></iframe>
      </Grid>
    </Grid>
  );
};

export default ProjectsTemplate;
