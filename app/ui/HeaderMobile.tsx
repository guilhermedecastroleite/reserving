"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { IoIosClose, IoIosMenu } from "react-icons/io";
import clsx from "clsx";

import Title from "./Typography/Title";

const HeaderMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => (menuOpen ? setMenuOpen(false) : void null), [pathname]);

  return (
    <>
      <header
        id="HeaderMobile"
        className="top-0 left-0 h-16 bg-white flex md:hidden justify-center"
      >
        <div
          id="HeaderMobileContent"
          className="relative w-full max-w-screen-xl flex items-center justify-center px-4 lg:px-12"
        >
          <button className="absolute left-4 lg:left-12" onClick={toggleMenu}>
            <IoIosMenu className="text-3xl" />
          </button>
          <Image
            src="/logo.svg"
            alt="Reserving"
            width={131}
            height={21}
            priority
          />
          <div className="absolute right-4 lg:right-12">Login</div>
        </div>
      </header>

      <div
        id="HiddenPannel"
        className={clsx(
          "fixed p-12 w-full h-lvh bg-white left-0 top-0 text-xl",
          { hidden: !menuOpen }
        )}
      >
        <Title>Menu</Title>
        <ul id="HeaderMobileNavigation" className="flex flex-col gap-5 mt-8">
          <li>
            <Link href="/">Home</Link>{" "}
          </li>
          <li>
            <Link href="/">Discover</Link>
          </li>
          <li>
            <Link href="/">Activities</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
        <button className="right-4 top-8 absolute" onClick={toggleMenu}>
          <IoIosClose className="text-6xl" />
        </button>
      </div>
    </>
  );
};

export default HeaderMobile;
