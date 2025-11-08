"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../public/logo/logo.png";
import Navbar from "./Navbar";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const close = () => setMenuOpen(false);

  return (
    <header className="">
      <div className="bg-background flex items-center justify-between py-6 px-6 z-20 relative">
        <Link href="/" className="inline-block h-8 w-12 relative">
          <Image src={logo} alt="logo" fill sizes="" className="dark:invert" />
        </Link>

        <button
          type="button"
          className="relative flex items-center justify-center w-7 h-7 cursor-pointer text-gray hover:text-main active:text-main"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <AiOutlineClose
            className={`absolute size-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 transform ${
              menuOpen
                ? "opacity-100 scale-100 visible pointer-events-auto"
                : "opacity-0 scale-60 invisible pointer-events-none"
            }`}
          />

          <HiMenu
            className={`absolute size-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 transform ${
              menuOpen
                ? "opacity-0 scale-60 invisible pointer-events-none"
                : "opacity-100 scale-100 visible pointer-events-auto"
            }`}
          />
        </button>
      </div>

      <Navbar menuOpen={menuOpen} action={close} />
    </header>
  );
};
export default Header;
