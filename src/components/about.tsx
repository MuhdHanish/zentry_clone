import gsap from "gsap";
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all";
import { AnimatedTitle } from "./animated-title";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        });

        clipAnimation.to(".mask-clip-path", {
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
            border: "none",
        });
    });

    return (
        <div id="about" className="min-h-screen w-screen">
            <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
                <p className="font-general text-sm uppercase md:text-[10px]">
                    Welcome to Zentry
                </p>
                <AnimatedTitle
                    title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
                    containerClass="hero-heading mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem] special-font !text-black"
                />
                <div className="about-subtext">
                    <p>The Metagame begins your life, now an epic MMORPG</p>
                    <p className="text-gray-500">
                        Zentry is a unified play layer that bridges players, agentic AI, and blockchains, creating a new economic paradigm.
                    </p>
                </div>
            </div>
            <div id="clip" className="h-dvh w-screen">
                <div className="mask-clip-path about-image">
                    <img
                        src="/img/about.webp"
                        alt="about-background-image"
                        title="About Background Image"
                        className="absolute left-0 top-0 size-full object-cover"
                    />
                </div>
            </div>
        </div >
    )
}
