import gsap from "gsap";
import {
    AnimatedTitle,
    Button,
    RoundedCorners
} from "../../components";
import { MouseEvent, useRef } from "react"

export const Story = () => {
    const frameRef = useRef<null | HTMLImageElement>(null);

    const handleMouseLeave = () => {
        if (!frameRef.current) return;

        gsap.to(frameRef.current, {
            duration: 0.3,
            rotateX: 0,
            rotateY: 0,
            ease: "power1.out"
        });
    }

    const handleMouseMove = (event: MouseEvent) => {
        if (!frameRef.current) return;

        const { clientX, clientY } = event;
        const { left, top, width, height } = frameRef.current?.getBoundingClientRect();

        const x = clientX - left;
        const y = clientY - top;

        const centerX = width / 2;
        const centerY = height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(frameRef.current, {
            duration: 0.3,
            rotateX,
            rotateY,
            transformPerspective: 500,
            ease: "power1.out"
        });
    }

    return (
        <section
            id="story"
            className="min-h-dvh w-screen bg-black text-blue-50"
        >
            <div className="flex size-full flex-col items-center py-10">
                <h6 className="font-general text-sm uppercase md:text-[10px]">
                    The open ip universe
                </h6>
                <div className="relative size-full">
                    <AnimatedTitle
                        title="The st<b>o</b>ry of a hidden real<b>m</b>"
                        containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
                    />
                    <div className="story-img-container">
                        <div className="story-img-mask">
                            <div className="story-img-content">
                                <img
                                    ref={frameRef}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseEnter={handleMouseLeave}
                                    onMouseUp={handleMouseLeave}
                                    onMouseMove={handleMouseMove}
                                    src="/img/entrance.webp"
                                    alt="story-image"
                                    title="Story Image"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <RoundedCorners />
                    </div>
                </div>
                <div className="-mt-64 md:me-44 flex w-full justify-center md:justify-end">
                    <div className="flex h-full w-fit flex-col items-center md:items-start">
                        <p className="text-sm md:text-base mt-4 max-w-sm text-center md:text-start font-robert-regular text-violet-50">
                            Where realms converge, lies Zentry and the boundless pillar. Discover its secrets and shape your fate amidst infinite opportunities.
                        </p>
                        <Button
                            id="story-button"
                            title="Discover Prologue"
                            containerClass="mt-5 bg-blue-50"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
