import { getTextFromReactNode } from "../../utils";
import React, { MouseEvent, useRef, useState } from "react";

const BentoCard = ({
    src,
    title,
    description,
    autoPlay = false,
}: {
    src: string;
    title: React.ReactNode;
    description?: string;
    autoPlay?: boolean;
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div
            className="relative size-full"
            onMouseEnter={!autoPlay ? handleMouseEnter : undefined}
            onMouseLeave={!autoPlay ? handleMouseLeave : undefined}
        >
            <video
                ref={videoRef}
                src={src}
                title={`Feature ${getTextFromReactNode(title)} Video`}
                loop
                muted
                autoPlay={autoPlay}
                className="absolute left-0 top-0 size-full object-cover object-center"
            />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50 mix-blend-difference">
                <div>
                    <h3 className="bento-title special-font">{title}</h3>
                    {description && (
                        <p className="mt-3 max-w-64 text-xs md:text-sm">{description}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

const BentoTilt = ({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string
}) => {
    const [transformStyle, setTransformStyle] = useState<string>("");

    const itemRef = useRef<null | HTMLDivElement>(null);

    const handleMouseMove = (event: MouseEvent) => {
        if (!itemRef.current) return;

        const { left, top, width, height } = itemRef.current?.getBoundingClientRect();

        const relativeX = (event.clientX - left) / width;
        const relativeY = (event.clientY - top) / height;

        const tiltX = (relativeX - 0.5) * 5;
        const tiltY = (relativeY - 0.5) * -5;

        const newTransform = `perspective(700px) rotateY(${tiltX}deg) rotateX(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;
        setTransformStyle(newTransform);
    }

    const handleMouseLeave = () => {
        setTransformStyle("");
    }

    return (
        <div
            ref={itemRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={className}
            style={{ transform: transformStyle }}
        >
            {children}
        </div>
    )
}

export const Features = () => {
    return (
        <section id="features" className="bg-black pb-52">
            <div className="container mx-auto px-5 md:px-10">
                <div className="px-5 py-32 font-robert-regular text-blue-50">
                    <h5 className="text-lg">Explore the Zentry Universe</h5>
                    <p className="max-w-md opacity-50 text-sm md:text-base">
                        Immerse yourself in an IP-rich product universe where AI-driven gamification and hyper-personalization lead humans & AI into a global play economy.
                    </p>
                </div>
                <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
                    <BentoCard
                        src="/videos/feature-1.mp4"
                        title={<>Radia<b>n</b>t</>}
                        description="The game of games transforming your in-game actions across Web2 & Web3 titles into a rewarding adventure."
                    />
                </BentoTilt>
                <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
                    <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                        <BentoCard
                            src="/videos/feature-2.mp4"
                            title={<>Zig<b>m</b>a</>}
                            description="The NFT collection merging Zentry’s IP, AI, and gaming—pushing the boundaries of NFT innovation."
                        />
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
                        <BentoCard
                            src="/videos/feature-3.mp4"
                            title={<>N<b>e</b>xus</>}
                            description="The player portal uniting humans & AI to play, compete, earn and showcase—gamifying social & Web3 experiences."
                        />
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                        <BentoCard
                            src="/videos/feature-4.mp4"
                            title={<>Az<b>u</b>l</>}
                            description="The agent of agents elevating agentic AI experience to be more fun and productive."
                        />
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_2">
                        <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
                            <h2 className="bento-title special-font max-w-64 text-black">
                                M<b>o</b>re co<b>m</b>ing s<b>o</b>oon.
                            </h2>
                            <img
                                src="/img/play.svg"
                                alt="arrow-icon"
                                title="Arrow Icon"
                                className="m-5 md:m-10 scale-[2.5] md:scale-[4] self-end"
                            />
                        </div>
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_2">
                        <video
                            src="/videos/feature-5.mp4"
                            title="Feature 5 Video"
                            loop
                            muted
                            autoPlay
                            className="size-full object-cover object-center"
                        />
                    </BentoTilt>
                </div>
            </div>
        </section>
    )
};
