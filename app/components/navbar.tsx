'use client'

import Image from "next/image";
import Link from "next/link";
import * as Icon from 'react-icons/bi'
import { navItems } from "../lib/navItem";
import { usePathname } from "next/navigation";
import { NavLinks } from "../lib/accounts/NavLinks";
import { useState } from "react";
import IconSvg from "./IconSvg";
import { createPortal } from "react-dom";
import ModalLogin from "../ui/ModalLogin";
import ModalSearch from "../ui/ModalSearch";

export default function Navbar(){
    const pathname = usePathname()
    const [showMenu, setShowMenu] = useState(false)
    const [showLoginModal, setShowLoginModal] = useState(false)
    const [showSearchModal, setShowSearchModal] = useState(false)

    return(
        <div className="w-screen bg-black/60 sticky top-0 pr-9 shadow-xl flex justify-between z-50">
            <ul className="w-2/5 flex flex-row items-center justify-between text-white">
                <li className="size-12 bg-black rounded-full overflow-hidden mr-10">
                    <Link href='/'>
                        <Image src='/ressources/logo.png' alt="logo" width={1000} height={100} />
                    </Link>
                </li>
                {
                    navItems.map((item, key) => (
                        <li key={key} className="text-md flex">
                            {/* {item.name == "Recompenses" ? <IconSvg name="bonus" /> : null } */}
                            <Link href={item.path} className={`${pathname === item.path ? 'font-bold text-red-white' : 'text-gray-300'}`} >{item.name}</Link>
                            {item.name == "Recompenses" ? <Icon.BiUser className="ml-4" onClick={() => setShowLoginModal(true)} /> : null }
                        </li>
                    ))
                }
            </ul>
            <ul className="flex items-center space-x-7 relative transition-all">
                {
                    !showSearchModal ? <div className="transition-all duration-300 ease-in-out" onClick={() => setShowSearchModal(true)}> <IconSvg name="search" /> </div> :
                    <div className="flex items-center space-x-2 px-2 bg-white/2 border border-[#232325] rounded-md transition-all duration-300 ease-in-out">
                        <IconSvg name="search" />
                        <input type="text" placeholder="Rechercher..."
                        className="bg-transparent p-2 outline-none"
                        />
                        <div className="transition-all duration-300 ease-in-out" onClick={() => setShowSearchModal(false)}> <Icon.BiX size={20} /> </div>
                    </div>
                }
                <IconSvg name="notify" />
                <div className="size-8 rounded-full bg-[#26A69A] text-white flex items-center 
                justify-center text-xl cursor-pointer relative"
                onClick={() => setShowMenu(!showMenu)}
                >
                    <span className="text-black font-bold">D</span>
                    <IconSvg name="chevron-down" className="w-4 absolute left-9 top-3" />
                    <div className={`${showMenu ? 'block': 'hidden'} absolute top-12 -right-2 w-[200px] h-[254px] bg-[#18181C]
                        rounded-md p-4 space-y-4 shadow shadow-black/25 z-20
                        `}>
                        {
                            NavLinks.map((link, key) => (
                                <Link key={key} href={link.href} className='flex items-center gap-x-2 text-xs'>
                                    {link.icon}
                                    <span>{link.title}</span>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </ul>
            {showLoginModal && createPortal(<ModalLogin closeModal={() => setShowLoginModal(false)} />, document.body)}
            {showSearchModal && createPortal(<ModalSearch />, document.body)}
        </div>
    );
}