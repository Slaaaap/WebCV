import gsap from "gsap";
import { FC, useEffect, useRef, useState } from "react";

interface TypewriterProps {
    words: string[];
    speed?: number;
    pauseDuration?: number;
    deleteSpeed?: number;
}

export const Typewriter: FC<TypewriterProps> = ({
    words,
    speed = 0.03,
    pauseDuration = 1,
    deleteSpeed = 0.03,
}) => {
    const textRef = useRef<HTMLDivElement>(null);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        if (textRef.current && words.length > 0) {
            let chars: string[] = [];
            const handleTypingAndDeleting = () => {
                chars = words[currentWordIndex].split("");

                const typingTl = gsap.timeline();
                typingTl.to(
                    {},
                    {
                        duration: chars.length * speed,
                        ease: "none",
                        onUpdate: function () {
                            const nextCharIndex = Math.ceil(
                                this.progress() * chars.length
                            );
                            if (nextCharIndex <= chars.length) {
                                textRef.current!.innerHTML = chars
                                    .slice(0, nextCharIndex)
                                    .join("");
                            }
                        },
                    }
                );

                typingTl.to({}, { duration: pauseDuration * words.length });
                typingTl.to(
                    {},
                    {
                        duration: chars.length * deleteSpeed,
                        ease: "none",
                        onUpdate: function () {
                            const nextCharIndex = Math.ceil(
                                this.progress() * chars.length
                            );
                            if (nextCharIndex <= chars.length) {
                                textRef.current!.innerHTML = chars
                                    .slice(0, chars.length - nextCharIndex)
                                    .join("");
                            }
                        },
                        onComplete: () => {
                            setCurrentWordIndex(
                                (prevIndex) => (prevIndex + 1) % words.length
                            );
                        },
                    }
                );
            };

            handleTypingAndDeleting();
        }
    }, [currentWordIndex]);

    return (
        <div className="flex gap-1 bg-primary dark:bg-white/40 px-2 py-4 rounded-lg ">
            <h1
                ref={textRef}
                className="font-raleway dark:text-primary text-white"></h1>
            <span className="blinking-cursor dark:text-primary text-white">
                |
            </span>
        </div>
    );
};
