import { FC, useEffect, useState } from "react";

export const ScrollTopButton: FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 420) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        isVisible && (
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="fixed bottom-5 right-5 p-2 w-10 h-10 flex items-center bg-primary dark:bg-white rounded-full z-50 transition ease duration-200 active:scale-95">
                <i className="ri-arrow-up-s-line text-2xl text-white dark:text-primary"></i>
            </button>
        )
    );
};
