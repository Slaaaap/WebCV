import { FC } from "react";

export const Footer: FC = () => {
    return (
        <footer className="px-8 py-16 pb-2 flex items-center justify-center flex-col">
            <p className="text-primary dark:text-white font-raleway mb-10">
                &copy; 2025 - Made with ❤️ by Matt Grenier
            </p>
            <a
                href="https://www.linkedin.com/in/matt-grenier-boley-2038b2117/"
                target="_blank"
                rel="noreferrer">
                <i className="ri-linkedin-box-line text-2xl"></i>
            </a>
        </footer>
    );
};
