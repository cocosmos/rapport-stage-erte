import { useTranslation } from "react-i18next";
import logo from "../assets/logo512.png";
import { FunctionComponent, useEffect } from "react";

type HomeProps = {
  setHeaderTitle: (title: string) => void;
};

const Home: FunctionComponent<HomeProps> = ({ setHeaderTitle }) => {
  useEffect(() => {
    setHeaderTitle("Home");
  }, [setHeaderTitle]);
  const { t } = useTranslation();
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          {t("welcome")}
        </header>
      </div>
    </>
  );
};

export default Home;
