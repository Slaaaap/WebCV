import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export const useTranslationHook = () => {
    const { t, i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language);

    const switchLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setCurrentLang(lang);
    };

    useEffect(() => {
        setCurrentLang(i18n.language);
    }, [i18n.language]);

    return { t, currentLang, switchLanguage };
};
