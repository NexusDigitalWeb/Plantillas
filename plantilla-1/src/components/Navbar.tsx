import React, { useState, useEffect } from "react";
import HamburgerButton from "./buttons/HamburgerButton";

const links = ["Inicio", "Sobre nosotros", "Nuestros servicios", "Contáctanos"];

const Navbar = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleHamburger = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <nav className="w-full h-full bg-[#F1F5F9]">
      <div className="h-full">
        <div className="flex items-center justify-between p-10">
          <h1 className="font-bold text-3xl lg:text-4xl">Logo</h1>
          <HamburgerButton event={handleHamburger} isOpen={isOpen} />

          <ul className="hidden lg:flex gap-10 text-xl">
            {links.map((items: string, i: number) => (
                <li key={i} className="hover:bg-[#B0BFE6] p-2 rounded transition-all ease-in duration-150">
                    <a href={`#${items}`}>{items}</a>
                </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col">
          <ul
            className={`flex flex-col lg:hidden items-center p-6 gap-10 text-lg bg-[#F1F5F9] fixed w-full h-[80dvh] ${
              isOpen ? "left-0" : "left-[1000px]"
            } transition-all ease-in duration-200 h-dvh`}
          >
            {links.map((item: string, i: number) => (
              <li key={i} className="text-nowrap w-[90%] md:w-[95%]">
                <a
                  href={`#${item}`}
                  className="text-2xl font-semibold text-[#283655]"
                  onClick={handleHamburger}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
