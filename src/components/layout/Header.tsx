import { FC } from "react";
import ThemeToggle from "../ThemeToggle";
import { useTranslationHook } from "../../hooks/useTranslation";

export const Header: FC = () => {
    const { currentLang, switchLanguage } = useTranslationHook();

    return (
        <header className="px-5 h-[60px] flex justify-between items-center border-b border-slate-300 dark:border-white/40 sticky top-0 backdrop transition ease duration-200 z-50">
            <div className="dark:text-white/40">Slap</div>
            <div className="flex items-center gap-4">
                {currentLang === "fr" && (
                    <button
                        onClick={() => switchLanguage("en")}
                        className="text-xl">
                        🇺🇸
                    </button>
                )}
                {currentLang === "en" && (
                    <button
                        onClick={() => switchLanguage("fr")}
                        className="text-xl">
                        🇫🇷
                    </button>
                )}
                <ThemeToggle />
            </div>
        </header>
    );
};
