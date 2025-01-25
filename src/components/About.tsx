import { FC } from "react";
import { Button } from "./ui/button";
import { useTranslationHook } from "@/hooks/useTranslation";

export const About: FC = () => {
    const { t } = useTranslationHook();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:h-[calc(100vh-60px)] max-w-7xl mx-auto">
            <div className="flex items-center justify-center">
                <img
                    src="src/assets/img/profil.jpg"
                    alt="portrait"
                    className="w-[400px] rounded-xl mt-16"
                />
            </div>
            <div className="flex flex-col justify-center">
                <h2 className="text-3xl lg:text-5xl text-center font-bold dark:text-white mb-8 font-raleway">
                    {t("about.title")}
                </h2>
                <p className="text-lg dark:text-white/60 font-raleway my-4">
                    {t("about.greeting")}
                </p>
                <p className="text-lg dark:text-white/60 font-raleway mb-4 text-justify">
                    {t("about.text1")}
                </p>
                <p className="text-lg dark:text-white/60 font-raleway mb-4 text-justify">
                    {t("about.text2")}
                </p>

                <a
                    href="https://kanbios.fr"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 text-center lg:text-left">
                    <Button variant="default" className="my-10 lg:my-0">
                        {t("about.contact")}
                    </Button>
                </a>
            </div>
        </div>
    );
};
