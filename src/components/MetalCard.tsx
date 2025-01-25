import { Project } from "@/types/types";
import React, { useState, useRef, useEffect } from "react";

interface MetalCardProps {
    project: Project;
}

const MetalCard: React.FC<MetalCardProps> = ({ project }) => {
    const [hoverStyle, setHoverStyle] = useState<string>("");
    const cardRef = useRef<HTMLAnchorElement | null>(null);

    const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (cardRef.current) {
            e.preventDefault();

            const pos =
                e.type === "touchmove"
                    ? [
                          (e as React.TouchEvent).touches[0].clientX,
                          (e as React.TouchEvent).touches[0].clientY,
                      ]
                    : [
                          (e as React.MouseEvent).nativeEvent.offsetX,
                          (e as React.MouseEvent).nativeEvent.offsetY,
                      ];

            const card = cardRef.current;
            const [l, t] = pos;
            const h = card.offsetHeight;
            const w = card.offsetWidth;
            const px = Math.abs(Math.floor((100 / w) * l) - 100);
            const py = Math.abs(Math.floor((100 / h) * t) - 100);
            const pa = 50 - px + (50 - py);
            const lp = 50 + (px - 50) / 1.5;
            const tp = 50 + (py - 50) / 1.5;
            const pxSpark = 50 + (px - 50) / 100;
            const pySpark = 50 + (py - 50) / 100;
            const pOpc = 20 + Math.abs(pa) * 1.5;
            const ty = ((tp - 50) / 2) * -1;
            const tx = ((lp - 50) / 1.5) * 0.5;

            const gradPos = `background-position: ${lp}% ${tp}%;`;
            const sprkPos = `background-position: ${pxSpark}% ${pySpark}%;`;
            const opc = `opacity: ${pOpc / 100};`;
            const tf = `transform: rotateX(${-ty}deg) rotateY(${-tx}deg) scale(1.05);`;

            const css = `
                .movie-card:hover:before { ${gradPos} }
                .movie-card:hover:after { ${sprkPos} ${opc} }
                .movie-card:hover { ${tf} }
            `;

            setHoverStyle(css);
        }
    };

    const handleLeave = () => {
        setHoverStyle("");
    };

    useEffect(() => {
        const styleElement = document.createElement("style");
        document.head.appendChild(styleElement);

        return () => {
            document.head.removeChild(styleElement);
        };
    }, []);

    useEffect(() => {
        if (hoverStyle) {
            const styleElement = document.head.querySelectorAll("style");
            if (styleElement.length > 0) {
                styleElement[styleElement.length - 1].innerHTML = hoverStyle;
            }
        }
    }, [hoverStyle]);

    return (
        <a
            className="movie-card bg-white border dark:border-0 dark:bg-[#212529] hover:shadow-lg"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
            onMouseLeave={handleLeave}
            onTouchEnd={handleLeave}
            onTouchCancel={handleLeave}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            ref={cardRef}>
            <div className="flex flex-grow max-w-[350px]">
                <div className="p-4 font-raleway h-full">
                    <div className="flex items-center justify-between gap-2">
                        <img
                            src={project.image}
                            alt="STYNG"
                            className="w-fit max-w-20 h-16 dark:bg-white rounded p-1.5 object-contain object-left"
                        />
                        <h2 className="text-xl font-semibold">
                            {project.title}
                        </h2>
                    </div>
                    <p className="text-justify mb-0 mt-4 dark:text-white/60">
                        {project.description}
                    </p>
                </div>
            </div>
        </a>
    );
};

export default MetalCard;
