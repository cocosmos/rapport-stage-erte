import { useTranslation } from "react-i18next";
import logo from "../assets/logo512.png";

const Home = () => {
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
