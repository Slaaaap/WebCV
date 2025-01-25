import { useTranslationHook } from "@/hooks/useTranslation";
import { FC } from "react";
import { Typewriter } from "./Typewriter";
import { ParticleBackground } from "./ParticleBackground";

interface HeroProps {
    scrollEvent: () => void;
}

export const Hero: FC<HeroProps> = ({ scrollEvent }) => {
    const { t } = useTranslationHook();

    return (
        <div className="h-[calc(100vh-60px)] bg-slate-100 dark:bg-slate-100/5 w-full transition ease duration-200 flex flex-col">
            <div className="absolute h-[calc(100vh-60px)] z-10">
                <ParticleBackground />
            </div>
            <div className="h-full flex items-center z-20">
                <div className="w-full">
                    <h1 className="md:ms-12 text-xl md:text-5xl lg:text-6xl min-[390px]:text-3xl md:justify-start justify-center font-raleway flex items-center dark:text-white/40">
                        {t("hero.preTypewriter")}&nbsp;
                        <Typewriter
                            words={[
                                t("hero.typewriter1"),
                                t("hero.typewriter2"),
                                t("hero.typewriter3"),
                            ]}
                        />
                    </h1>
                </div>
            </div>
            <div className="flex justify-center w-full pb-5 z-20">
                <button onClick={scrollEvent}>
                    <i className="ri-arrow-down-s-line text-4xl"></i>
                </button>
            </div>
        </div>
    );
};
