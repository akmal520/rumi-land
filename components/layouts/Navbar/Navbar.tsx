
import Image from "next/image";
import React from "react";
import Logo from "@/app/image/logo-1.jpg";
import Link from "next/link";
import { NavigationMenu } from "./utils/constant";
import { ThemeSwitcher } from "@/components/theme-switcher";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center h-24">
      <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5">
        <div className="flex justify-between items-center font-semibold w-full">
          <Link href="/" legacyBehavior passHref>
            <Image src={Logo} width={150} height={150} alt="..." priority className="cursor-pointer"/>
          </Link>
          <div className="flex flex-row items-center space-x-6">
            {
              NavigationMenu.map((menu) => (
                <Link
                  key={menu.name}
                  href={menu.href}
                  className="hover:text-green-600 transition-all duration-200 cursor-pointer"
                >
                  {menu.name}
                </Link>
              ))
            }
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
