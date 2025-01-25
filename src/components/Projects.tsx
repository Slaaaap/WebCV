import { FC, useEffect, useRef } from "react";
import { useTranslationHook } from "@/hooks/useTranslation";
import gsap from "gsap";
import MetalCard from "./MetalCard";

export const Projects: FC = () => {
    const { t } = useTranslationHook();
    const containerRef = useRef<HTMLDivElement>(null);

    const projects = [
        {
            id: 0,
            title: "ADA",
            description: t("projects.ada"),
            link: "https://ada.fr",
            image: "public/assets/img/ADA_logo.png",
        },
        {
            id: 5,
            title: "ExtraStudent",
            description: t("projects.extrastudent"),
            link: "https://www.extrastudent.com/",
            image: "public/assets/img/extrastudent.png",
        },
        {
            id: 6,
            title: "Fruits de mer",
            description: t("projects.seafood"),
            link: "https://plateaufruitsdemer.com/",
            image: "public/assets/img/seafood.webp",
        },
        {
            id: 3,
            title: "Reboul & Co",
            description: t("projects.reboul"),
            link: "https://reboulandco.com",
            image: "public/assets/svg/reboul.svg",
        },
        {
            id: 2,
            title: "Rock the Law",
            description: t("projects.rockthelaw"),
            link: "https://rockthelaw.fr",
            image: "public/assets/img/rockthelaw.png",
        },
        {
            id: 4,
            title: "Saleboosting Academy",
            description: t("projects.sba"),
            link: "https://salesboosting-academy.com",
            image: "public/assets/svg/sba.svg",
        },
        {
            id: 1,
            title: "STYNG",
            description: t("projects.styng"),
            link: "https://styng.de",
            image: "public/assets/img/styng_black.png",
        },
    ];

    useEffect(() => {
        if (!containerRef.current) return;
        gsap.fromTo(
            containerRef.current.querySelectorAll(".fade-project"),
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                stagger: 0.5,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 90%",
                    end: "bottom 80%",
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <div className="container mx-auto mb-20">
            <h1 className="lg:text-5xl text-3xl font-bold font-raleway mb-20 text-center">
                {t("projects.title")}
            </h1>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto max-w-5xl"
                ref={containerRef}>
                {projects.map((project) => (
                    <div className="movie-cards fade-project w-fit mx-auto">
                        <MetalCard project={project} key={project.id} />
                    </div>
                ))}
            </div>
        </div>
    );
};
