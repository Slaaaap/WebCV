import { FC } from "react";
import { useTheme } from "@/context/ThemeContext";

const ThemeToggle: FC = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();

    return (
        <button
            onClick={toggleDarkMode}
            className="p-2 w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50">
            {isDarkMode ? (
                <i className="ri-sun-line" />
            ) : (
                <i className="ri-moon-line" />
            )}
        </button>
    );
};

export default ThemeToggle;
