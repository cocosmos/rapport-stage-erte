import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "fr"],
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "htmlTag", "path"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}_translation.json",
    },
    react: { useSuspense: true },
  });

export default i18n;
