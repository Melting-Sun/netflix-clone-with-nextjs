import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
useState;
// Hero Icons
import {
  BellIcon,
  GiftIcon,
  MenuIcon,
  SearchIcon,
  XIcon,
} from "@heroicons/react/outline";

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const menuToggle = () => {
    let menu = document.getElementById("menu");
    menu.classList.toggle("activeMenu");
    if (menu.classList.contains("activeMenu")) {
      setMenuActive(true);
    } else {
      setMenuActive(false);
    }
  };

  return (
    <div className="w-screen p-3  items-center relative">
      <div className="md:max-w-7xl flex flex-col md:flex-row items-start md:items-center mx-auto">
        <div className="md:w-52 md:h-20 w-28 h-12 relative md:m-0 m-4">
          <Image
            src="/../public/netflix-logo-png-2562.png"
            layout="fill"
            alt="Picture of the author"
          />
        </div>

        {/* menu btn */}
        {!menuActive ? (
          <MenuIcon
            className="w-7 text-gray-300 md:hidden absolute right-7"
            onClick={menuToggle}
          />
        ) : (
          <XIcon
            className="w-7 text-gray-300 md:hidden absolute right-7"
            onClick={menuToggle}
          />
        )}

        {/* menu */}
        <div
          id="menu"
          className="menu transition-all .2s bg-black flex flex-col md:flex-row xl:w-full md:w-3/4 sm:w-2/4 w-0 justify-between md:items-center overflow-hidden "
        >
          {/* left header links */}
          <div className="md:m-0 m-4">
            {/* Links */}
            <div className="links md:ml-8 w-full">
              <ul className="flex flex-col md:flex-row gap-3 md:items-center text-gray-400">
                <li className=" mx-1 font-semibold text-red-400 hover:text-gray-500">
                  <Link href="/">Home</Link>
                </li>
                <li className=" mx-1 hover:text-gray-500">
                  <Link href="/">Tv Shows</Link>
                </li>
                <li className=" mx-1 hover:text-gray-500">
                  <Link href="/">Movies</Link>
                </li>
                <li className=" mx-1 hover:text-gray-500">
                  <Link href="/">Recently</Link>
                </li>
                <li className=" mx-1 hover:text-gray-500">
                  <Link href="/">My List</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* right header links */}
          <div className="flex flex-col  md:m-0 m-4 gap-3 md:flex-row md:items-center text-gray-400 overflow-hidden">
            <SearchIcon className="w-6 mx-2" />
            <Link href="/" className="mx-2">
              KIDS
            </Link>
            <Link href="/" className="mx-2">
              DVD
            </Link>
            <GiftIcon className="w-5 mx-2 cursor-pointer" />
            <BellIcon className="w-5 mx-2 cursor-pointer" />
            <Image
              src="/../public/netflix-logo-png-2562.png"
              width={30}
              height={30}
              className="rounded-full mx-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
