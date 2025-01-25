import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enData from "../lang/en.json";
import frData from "../lang/fr.json";

const resources = {
    fr: frData,
    en: enData,
};

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: "fr",
        fallbackLng: "fr",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
