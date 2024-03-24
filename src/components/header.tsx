import { useEffect, useRef, useState } from "react"
import Button from "./header/Button"
import Menu from "./header/Menu"

const Header = () => {
    const [addVisible, setAddVisible] = useState(true);
    const navRef = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const isScrollUp = scrollTop < navRef.current;
            setAddVisible(isScrollUp);
            navRef.current = scrollTop;
        };
        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
        }
    }, [])
    return (
        <div className={`topnav${addVisible ? "visible" : "hidden"}
        `}>
            <header className="bg-[#2474E5] " >
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex-1 md:flex md:items-center md:gap-12">
                            <a className="block text-teal-600" href="#">
                                <img src="/Logo.png" alt="" />
                            </a>
                        </div>
                        <div className="md:flex md:items-center md:gap-12">
                            <Menu />
                            <div className="flex items-center gap-4">
                                <Button />
                                <div className="block md:hidden">
                                    <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


        </div>

    )
}

export default Header