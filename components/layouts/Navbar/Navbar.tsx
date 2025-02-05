import Image from "next/image";
import React from "react";
import Logo from "@/app/image/logo-1.png";
import Link from "next/link";
import { NavigationMenu } from "./utils/constant";
import { ThemeSwitcher } from "@/components/theme-switcher";

const Navbar = () => {
    return (
        <nav className="w-full flex justify-center h-24 z-50 sticky top-0">
            <div className="w-full flex justify-between items-center">
                <div className="flex justify-between items-center font-semibold w-full">
                    <Link href="/" legacyBehavior passHref>
                        <Image
                            src={Logo}
                            width={180}
                            height={180}
                            alt="..."
                            priority
                            className="cursor-pointer"
                        />
                    </Link>
                    <div className="flex flex-row items-center space-x-6">
                        {NavigationMenu.map((menu) => (
                            <Link
                                key={menu.name}
                                href={menu.href}
                                className="hover:text-green-700 text-green-600 transition-all duration-200 cursor-pointer"
                            >
                                {menu.name}
                            </Link>
                        ))}
                        <ul>
                            <li>
                                <ThemeSwitcher />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
