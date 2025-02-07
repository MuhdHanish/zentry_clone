import {
    FaDiscord,
    FaGithub,
    FaTwitch
} from "react-icons/fa";
import {
    FaXTwitter
} from "react-icons/fa6";

const links = [
    {
        href: "https://dicord.com",
        title: "Discord",
        icon: <FaDiscord />
    },
    {
        href: "https://github.com",
        title: "GitHub",
        icon: <FaGithub />
    },
    {
        href: "https://twitter.com",
        title: "Twitter",
        icon: <FaXTwitter />
    },
    {
        href: "https://twitch.com",
        title: "Twitch",
        icon: <FaTwitch />
    }
];

export const Footer = () => {
    return (
        <footer className="w-screen bg-violet-300 py-4 text-black font-general">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <p className="text-center text-sm md:text-left">©Zentry Clone 2025. All rights reserved</p>
                <div className="flex justify-center gap-5 md:justify-start">
                    {links?.map((link, index) => (
                        <a
                            key={`${link?.title}-${index}`}
                            title={link?.title}
                            href={link?.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl hover:translate-x-1 hover:-translate-y-1 translate-x-0 translate-y-0 hover:text-blue-50 duration-500 transition-all ease-in-out hover:drop-shadow-[0_5px_10px_rgba(255,255,255,0.5)]"
                        >
                            {link?.icon}
                        </a>
                    ))}
                </div>
                <a
                    href="#privacy-policy"
                    title="Privacy Policy"
                    className="text-center text-sm hover:underline md:text-right"
                >
                    Privacy Policy
                </a>
            </div>
        </footer>
    )
}
