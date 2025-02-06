import gsap from "gsap";
import { Button } from "./button";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Navigation } from "lucide-react";
import { useEffect, useRef, useState } from "react"

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 4;
    const nextVideoRef = useRef<null | HTMLVideoElement>(null);
    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

    const handleMiniVideoClick = () => {
        setHasClicked(true);
        setCurrentIndex(upcomingVideoIndex);
    };

    useGSAP(() => { 
        if(hasClicked) {
            gsap.set("#next-video", {
                visibility: "visible"
            });

            gsap.to("#next-video", {
                transformOrigin: "center center",
                scale: 1,
                width: "100%",
                height: "100%",
                duration: 1,
                ease: "power1.inOut",
                onStart: () => {
                    if(nextVideoRef.current) {
                        nextVideoRef.current.play();
                    }
                },
            });

            gsap.from("#current-video", {
                transformOrigin: "center center",
                scale: 0,
                duration: 1.5,
                ease: "power1.inOut",
            });
        }
    }, {
        dependencies: [
            currentIndex
        ],
        revertOnUpdate: true
    });

    useGSAP(() => {
        gsap.set("#video-frame", {
            clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
        });
        
        gsap.from("#video-frame", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#video-frame",
                start: "center center",
                end: "bottom center",
                scrub: true,
            },
        });
    });

    useEffect(() => { 
        if(loadedVideos === totalVideos - 1) {
            setLoading(false);
        }
    }, [loadedVideos]);

    const getVideoSrc = (index: number) => `/videos/hero-${index}.mp4`;

    const handleVideoLoad = () => setLoadedVideos((prevLoaded) => prevLoaded + 1);

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
            {loading && (
                <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
                    <div className="three-body">
                        <div className="three-body__dot" />
                        <div className="three-body__dot" />
                        <div className="three-body__dot" />
                    </div>
                </div>
            )}
            <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
                <div>
                    <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                        <div onClick={handleMiniVideoClick} className="origin-center scale-50 opacity-0 transition-all duration-300 ease-in hover:scale-100 hover:opacity-100">
                            <video
                                ref={nextVideoRef}
                                src={getVideoSrc(upcomingVideoIndex)}
                                loop
                                muted
                                id="current-video"
                                title="Upcoming Video"
                                className="size-64 origin-center scale-150 object-cover object-center"
                                onLoadedData={handleVideoLoad}
                            />
                        </div>
                    </div>
                    <video
                        ref={nextVideoRef}
                        src={getVideoSrc(currentIndex)}
                        autoPlay
                        loop
                        muted
                        id="next-video"
                        title="Next Video"
                        className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
                        onLoadedData={handleVideoLoad}
                    />
                    <video
                        src={getVideoSrc(currentIndex === (totalVideos - 1) ? 1 : currentIndex)}
                        autoPlay
                        loop
                        muted
                        id="current-video"
                        title="Current Video"
                        className="absolute left-0 top-0 size-full object-cover object-center"
                        onLoadedData={handleVideoLoad}
                    />
                </div>
                <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
                    G<b>a</b>ming
                </h1>
                <div className="absolute left-0 top-0 z-40 size-full">
                    <div className="mt-24 px-5 sm:px-10">
                        <h1 className="special-font hero-heading text-blue-100">
                            Redefi<b>n</b>e
                        </h1>
                        <p className="mb-4 max-w-64 font-robert-regular text-blue-100">
                            Enter the Metagame Layer <br /> Unleash the Play Economy.
                        </p>
                        <Button
                            id="watch-trailer"
                            title="Watch Trailer"
                            leftIcon={<Navigation className="fill-black text-black w-3 h-3 rotate-45" />}
                            containerClass="!bg-yellow-300 flex-center gap-2.5"
                        />
                    </div>
                </div>
            </div>
            <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
                G<b>a</b>ming
            </h1>
        </div>
    )
}
