import { FC, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Timeline } from "./Timeline";
import { useTranslationHook } from "@/hooks/useTranslation";

gsap.registerPlugin(ScrollTrigger);

export const ScrollSection: FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslationHook();

    useEffect(() => {
        if (sectionRef.current) {
            gsap.fromTo(
                sectionRef.current.querySelectorAll(".fade-in"),
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    stagger: 0.5,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 90%",
                        end: "bottom 80%",
                        scrub: true,
                    },
                }
            );
        }
    }, []);

    return (
        <div className="min-h-[calc(100vh-60px)] pt-20">
            <div className="container mx-auto h-full flex flex-col justify-start pb-20">
                <h1 className="lg:text-5xl text-3xl font-bold font-raleway mb-20 lg:mb-40 text-center">
                    {t("jobs.title")}
                </h1>
                <div ref={sectionRef}>
                    <Timeline />
                </div>
            </div>
        </div>
    );
};
