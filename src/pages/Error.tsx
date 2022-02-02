import { Stack, Typography } from "@mui/material";
import i18next from "i18next";
import { FunctionComponent, useEffect } from "react";
import { useTranslation } from "react-i18next";

type ErrorProps = {
  setHeaderTitle: (title: string) => void;
};

const Error: FunctionComponent<ErrorProps> = ({ setHeaderTitle }) => {
  useEffect(() => {
    setHeaderTitle(i18next.t("error"));
  }, [setHeaderTitle]);
  const { t } = useTranslation();
  return (
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
  );
};

export default Error;
