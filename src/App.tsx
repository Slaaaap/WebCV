import gsap from "gsap";
import { useEffect } from "react";
import { Header } from "./components/layout/Header";
import { Hero } from "./components/Hero";
import { ScrollTopButton } from "./components/layout/ScrollTopButton";
import { About } from "./components/About";
import { ScrollSection } from "./components/ScrollSection";
import { Projects } from "./components/Projects";
import { Footer } from "./components/layout/Footer";
import { Travels } from "./components/Travels";
import { Toaster } from "./components/ui/sonner";

function App() {
    useEffect(() => {
        gsap.fromTo("h1", { opacity: 0 }, { opacity: 1, duration: 1 });
    }, []);

    const scrollToFirstSection = () => {
        const firstSection = document.getElementById("section1");
        window.scrollTo({
            top: firstSection!.offsetTop,
            behavior: "smooth",
        });
    };

    return (
        <div
            className={`min-h-screen dark:bg-primary dark:text-white bg-white text-black transition ease duration-200`}>
            <Header />

            <Hero scrollEvent={scrollToFirstSection} />

            <div className="p-5" id="section1">
                <About />
            </div>

            <div className="p-5 bg-slate-100 dark:bg-slate-100/5">
                <ScrollSection />
            </div>

            <div className="p-5 mt-20">
                <Projects />
            </div>

            <div className="p-5 bg-slate-100 dark:bg-slate-100/5 md:h-[3200px]">
                <Travels />
            </div>

            <ScrollTopButton />
            <Footer />
            <Toaster position="bottom-center" />
        </div>
    );
}

export default App;
