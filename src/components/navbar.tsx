import { useRef } from "react";
import { Button } from "./button";
import { Navigation } from "lucide-react";

export const NavBar = () => {
    const navContainerRef = useRef(null);

    return (
        <div ref={navContainerRef} className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
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
                            rightIcon={<Navigation className="text-black fill-black w-3 h-3 rotate-[136deg] -top-0.5 relative" />}
                            containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                        />
                    </div>
                </nav>
            </header>
        </div>
    )
}
