import { FC } from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTranslationHook } from "@/hooks/useTranslation";

export const Timeline: FC = () => {
    const { t } = useTranslationHook();

    const jobs = [
        {
            id: 0,
            title: t("jobs.stageBTS.title"),
            location: t("jobs.stageBTS.location"),
            description: t("jobs.stageBTS.description"),
            date: t("jobs.stageBTS.date"),
            icons: [
                {
                    id: 0,
                    icon: "ri-html5-fill text-[#e34c26]",
                    tooltip: "HTML5",
                },
                {
                    id: 1,
                    icon: "ri-css3-fill text-[#264de4]",
                    tooltip: "CSS3",
                },
                {
                    id: 2,
                    icon: "ri-javascript-fill text-[#f0db4f]",
                    tooltip: "JavaScript",
                },
            ],
        },
        {
            id: 1,
            title: t("jobs.stageA2.title"),
            location: t("jobs.stageA2.location"),
            description: t("jobs.stageA2.description"),
            date: t("jobs.stageA2.date"),
            icons: [
                {
                    id: 0,
                    icon: "ri-html5-fill text-[#e34c26]",
                    tooltip: "HTML5",
                },
                {
                    id: 1,
                    icon: "ri-css3-fill text-[#264de4]",
                    tooltip: "CSS3",
                },
                {
                    id: 2,
                    icon: "ri-javascript-fill text-[#f0db4f]",
                    tooltip: "JavaScript",
                },
                {
                    id: 3,
                    icon: "ri-php-fill text-[#8892be]",
                    tooltip: "PHP",
                },
            ],
        },
        {
            id: 2,
            title: t("jobs.stageA3.title"),
            location: t("jobs.stageA3.location"),
            description: t("jobs.stageA3.description"),
            date: t("jobs.stageA3.date"),
            icons: [
                {
                    id: 0,
                    icon: "ri-reactjs-fill text-[#58c4dc]",
                    tooltip: "React",
                },
            ],
        },
        {
            id: 3,
            title: t("jobs.stageA4.title"),
            location: t("jobs.stageA4.location"),
            description: t("jobs.stageA4.description"),
            date: t("jobs.stageA4.date"),
            icons: [
                {
                    id: 0,
                    icon: "ri-angularjs-line text-[#e23237]",
                    tooltip: "Angular",
                },
            ],
        },
        {
            id: 4,
            title: t("jobs.stageA5.title"),
            location: t("jobs.stageA5.location"),
            description: t("jobs.stageA5.description"),
            date: t("jobs.stageA5.date"),
            icons: [
                {
                    id: 0,
                    icon: "ri-vuejs-line text-[#41b883]",
                    tooltip: "Vue",
                },
            ],
        },
        {
            id: 5,
            title: t("jobs.freelance.title"),
            location: t("jobs.freelance.location"),
            date: t("jobs.freelance.date"),
        },
        {
            id: 6,
            title: t("jobs.today.title"),
            location: t("jobs.today.location"),
            date: t("jobs.today.date"),
        },
    ];

    return (
        <div className="flex flex-col gap-12 px-5">
            <div className="flex flex-col gap-8 border-l dark:border-white/40 border-slate-300 ps-4">
                {jobs.map((item, index) => (
                    <div
                        key={index}
                        className={`${
                            index === jobs.length - 1 ? "mb-4" : "mb-10"
                        } relative fade-in`}>
                        <div className="w-4 h-4 dark:bg-white/40 bg-primary/20 rounded-full absolute -left-[25px] top-0.5 flex items-center justify-center">
                            <div className="w-2 h-2 dark:bg-white bg-primary/80 rounded-full"></div>
                        </div>
                        <div className="flex items-center lg:absolute -top-2 gap-2 flex-wrap">
                            <h1 className="text-2xl font-bold ">
                                {item.title}
                            </h1>
                            {item.icons &&
                                item.icons.map((icon, index) => (
                                    <TooltipProvider
                                        key={index}
                                        delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <i
                                                    className={`text-3xl ${icon.icon}`}></i>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{icon.tooltip}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                ))}
                        </div>
                        <p className="text-primary dark:text-white/60 mt-6 fade-in">
                            {item.date}
                        </p>
                        <p className="text-primary dark:text-white/30 mb-4 fade-in">
                            {item.location}
                        </p>
                        {item.description && (
                            <p
                                className="text-primary dark:text-white/60 fade-in"
                                dangerouslySetInnerHTML={{
                                    __html: item.description,
                                }}></p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
