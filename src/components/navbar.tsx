import gsap from "gsap";
import { Button } from "./button";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

export const NavBar = () => {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);

    const [isAudioOn, setIsAudioOn] = useState(false);
    const [isIndicatorOn, setIsIndicatorOn] = useState(false);

    const navContainerRef = useRef<null | HTMLDivElement>(null);
    const audioElementRef = useRef<null | HTMLAudioElement>(null);

    const { y: currentScrollY } = useWindowScroll();

    useEffect(() => {
        if (currentScrollY === 0) {
            setIsNavVisible(true);
            navContainerRef.current && navContainerRef.current?.classList.remove("floating-nav");
        } else if (currentScrollY > lastScrollY) {
            setIsNavVisible(false);
            navContainerRef.current && navContainerRef.current?.classList.add("floating-nav");
        } else if (currentScrollY < lastScrollY) {
            setIsNavVisible(true);
            navContainerRef.current && navContainerRef.current?.classList.add("floating-nav");
        }

        setLastScrollY(currentScrollY);
    }, [currentScrollY]);

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2
        });
    }, [isNavVisible]);

    const toggleAudioIndicator = () => {
        setIsAudioOn(prev => !prev);
        setIsIndicatorOn(prev => !prev);
    }

    useEffect(() => {
        if (isAudioOn) audioElementRef.current && audioElementRef.current?.play();
        else audioElementRef.current && audioElementRef.current?.pause();
    }, [isAudioOn]);

    return (
        <div ref={navContainerRef} className="fixed top-4 z-50 h-16 border-none transition-all duration-700 inset-x-3 sm:inset-x-6">
            <header className="absolute top-1/2 w-full -translate-y-1/2">
                <nav className="flex size-full items-center justify-between p-4">
                    <div className="flex items-center gap-7">
                        <img
                            src="/img/logo.png"
                            alt="logo"
                            title="Logo"
                            className="w-10"
                        />
                        <Button
                            id="product-button"
                            title="Products"
                            rightIcon={<img
                                src="/img/play.svg"
                                alt="arrow-icon"
                                title="Arrow Icon"
                                className="fill-black text-black w-3 h-3 rotate-[135deg] relative bottom-0.5"
                            />}
                            containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                        />
                    </div>
                    <div className="flex h-full items-center">
                        <div className="hidden md:block">
                            {
                                navItems?.map((link, index) => (
                                    <a
                                        key={`${link}-${index}`}
                                        className="nav-hover-btn"
                                        href={`#${link?.toString()?.toLowerCase()}`}
                                        title={link}
                                    >
                                        {link}
                                    </a>
                                ))
                            }
                        </div>
                        <button
                            id="audio-button"
                            onClick={toggleAudioIndicator}
                            className="ml-10 flex items-center space-x-0.5"
                            type="button"
                        >
                            <audio
                                ref={audioElementRef}
                                className="hidden"
                                src="/audio/loop.mp3"
                                loop
                            />
                            {[1, 2, 3, 4].map((bar, index) => (
                                <div
                                    key={`${bar}-${index}`}
                                    style={{
                                        animationDelay: `${bar * 0.1}s`
                                    }}
                                    className={`indicator-line ${isIndicatorOn ? "active" : ""}`}
                                />
                            ))}
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    )
}
