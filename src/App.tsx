import "./components/i18next/i18n";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ChangeLanguage from "./components/i18next/ChangeLanguages";
import Home from "./pages/Home";

const App = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("app_title");
  }, [t]);
  return (
    <>
      <Home />
      <ChangeLanguage />
    </>
  );
};

export default App;
