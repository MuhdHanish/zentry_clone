import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const AnimatedTitle = ({
    title,
    containerClass
}: {
    title: string;
    containerClass?: string
}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const titleAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "100 bottom",
                    end: "center bottom",
                    toggleActions: "play none none reverse",
                }
            });

            titleAnimation.to(".animated-word", {
                opacity: 1,
                transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
                ease: "power1.inOut",
                stagger: 0.02,
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className={clsx("animated-title", `${containerClass || ''}`)}>
            {title?.split("<br />").map((line, lineIndex) => (
                <div key={`${lineIndex}-${line}`} className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3">
                    {line?.split(" ").map((word, wordIndex) => (
                        <span
                            key={`${wordIndex}-${word}`}
                            className="animated-word"
                            dangerouslySetInnerHTML={{ __html: word }}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}
