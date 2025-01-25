/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useRef } from "react";
//@ts-expect-error
import World from "@svg-maps/world";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import gsap from "gsap";
import { useTranslationHook } from "@/hooks/useTranslation";
import { toast } from "sonner";
import { countries } from "@/utils/countries";

export const Travels: FC = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const { t, currentLang } = useTranslationHook();

    const visitedCountryCodes = [
        "es",
        "us",
        "ie",
        "do",
        "ad",
        "fr",
        "nl",
        "sn",
        "cu",
        "gb",
        "eg",
        "de",
        "it",
        "ch",
    ];

    const visitedCountries = countries
        .filter((country) => visitedCountryCodes.includes(country.code))
        .sort((a, b) => {
            // fr_name is the key for the French name of the country
            return a.fr_name.localeCompare(b.fr_name);
        });

    useEffect(() => {
        const mapElement = mapRef.current;
        if (!mapElement) return;

        const countriesSvg = mapElement.querySelectorAll(".svg-map__location");

        const totalScrollDistance = visitedCountryCodes.length * 150;

        gsap.killTweensOf(countriesSvg);
        gsap.killTweensOf(".fade-in-country");

        if (window.innerWidth > 768) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#worldMap",
                    start: "top-=30px top",
                    end: `+=${totalScrollDistance}`,
                    pin: true,
                    scrub: true,
                },
            });
            visitedCountryCodes.forEach((countryCode, index) => {
                const country =
                    countriesSvg[
                        World.locations.findIndex(
                            (loc: any) =>
                                loc.id.toLowerCase() ===
                                countryCode.toLowerCase()
                        )
                    ];
                country.classList.add("visited");

                if (country) {
                    tl.to(
                        country,
                        { fill: "#b6b6b6", duration: 1 },
                        index * (1 / visitedCountryCodes.length)
                    );
                }
            });
        }
        if (sectionRef.current) {
            gsap.fromTo(
                sectionRef.current.querySelectorAll(".fade-in-country"),
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
    }, [window.innerWidth]);

    const handleLocationPress = (e: any) => {
        e.preventDefault();
        const lang_key = currentLang === "fr" ? "fr_name" : "en_name";
        const country = countries.find(
            (loc: any) => loc.code === e.target.id.toLowerCase()
        );
        if (e.target.classList.contains("visited")) {
            toast.custom(() => (
                <div className="w-full flex justify-between items-center min-w-[300px] p-4 rounded-lg">
                    <div className="flex items-center">
                        <div>{country?.[lang_key]}</div>
                        <div className="ms-2 pt-1">✅</div>
                    </div>
                    <div className="text-3xl">{country?.flag}</div>
                </div>
            ));
        } else {
            toast.custom(() => (
                <div className="w-full flex justify-between items-center min-w-[300px] p-4 rounded-lg">
                    <div className="flex items-center">
                        <div>{country?.[lang_key]}</div>
                        <div className="ms-2 pt-1">❌</div>
                    </div>
                    <div className="text-3xl">{country?.flag}</div>
                </div>
            ));
        }
    };

    return (
        <>
            <div
                className="w-full max-w-[1200px] mx-auto pt-10"
                id="worldMap"
                ref={mapRef}>
                <h1 className="mb-10 lg:text-5xl text-3xl font-bold font-raleway text-center">
                    {t("travels.title")}
                </h1>
                <div className="hidden md:block">
                    {/* 
                    // @ts-ignore */}
                    <SVGMap
                        map={World}
                        className="world-map"
                        onLocationClick={(e: any) => handleLocationPress(e)}
                    />
                </div>
                <div className="block md:hidden" ref={sectionRef}>
                    {visitedCountries.map((country) => (
                        <div
                            key={country.code}
                            className="fade-in-country flex items-center justify-between bg-slate-100 dark:bg-slate-100/5 rounded-lg p-2 mb-4">
                            <div className="flex items-center">
                                <div className="font-raleway">
                                    {
                                        country[
                                            currentLang === "fr"
                                                ? "fr_name"
                                                : "en_name"
                                        ]
                                    }
                                </div>
                                <div className="ms-2 text-3xl">
                                    {country.flag}
                                </div>
                            </div>
                            <div className="text-3xl">✅</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
