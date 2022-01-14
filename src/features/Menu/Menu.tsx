import { Popover } from "@headlessui/react";
import React, { useState } from "react";
import {
  HiOutlineMenu,
  HiOutlineMoon,
  HiOutlineSearch,
  HiOutlineSun,
} from "react-icons/hi";
import { usePopper } from "react-popper";
import logo from "../../assets/img/logo.svg";
import { MobileMenu } from "./MobileMenu";

export const Menu = () => {
  const [referenceSearchBtn, setReferenceSearchBtn] = useState<HTMLButtonElement | null>(null);
  const [popperSearch, setPopperSearch] = useState<HTMLDivElement | null>();
  const { styles, attributes } = usePopper(referenceSearchBtn, popperSearch, {modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 2],
      },
    }
  ]});
  const [isDark, setIsDark] = useState(false);
  const setTheme = () => setIsDark(!isDark);

  return (
    <nav
      className="sticky shadow-md z-10 top-0 w-full bg-white md:bg-opacity-90 flex flex-col justify-center py-3 md:py-6 mb-3 lg:text-lg "
    >
      <div className="container mx-auto flex flex-row justify-around px-6">
        <button className="">
          <img src={logo} className="logo h-6 lg:h-8" alt="logo" />
        </button>
        {
          //  desktop menu layout
        }
        <div className=" hidden md:flex flex-row md:justify-start w-1/2">
          <button className="hover:text-pink-600 py-1 px-3 uppercase">
            Shows
          </button>
          <button className="hover:text-pink-600 py-1 px-3 uppercase">
            Movies
          </button>
          <button className="hover:text-pink-600 py-1 px-3 uppercase">
            Trending
          </button>
          <button className="hover:text-pink-600 py-1 px-3 uppercase">
            People
          </button>
        </div>
        <div className="hidden md:flex flex-row items-center justify-end space-x-4 ">
          <button className="cursor-pointer" onClick={setTheme}>
            {!isDark ? (
              <HiOutlineMoon className="h-6 w-6 text-pink-600 " />
            ) : (
              <HiOutlineSun className="h-6 w-6 " />
            )}
          </button>
          <Popover className="">
                <Popover.Button
                  ref={setReferenceSearchBtn}
                  className={
                    "flex flex-row items-center space-x-4 py-1 px-3 rounded-md bg-pink-600 text-white hover:bg-gray-600 transition-colors duration-300 "
                  }
                >
                  <span>Search</span>
                  <HiOutlineSearch className=" h-6 w-6 " />
                </Popover.Button>

                <Popover.Panel
                  ref={setPopperSearch}
                  style={styles.popper}
                  {...attributes.popper}
                  className="  text-white z-10"
                >
                  <div className="container mx-auto">
                  <input
                  autoFocus
                      type="text"
                      className="rounded-md  mt-2 px-3 py-1 text-gray-600 outline outline-1 outline-gray-600"
                    />
                  </div>
                  
                </Popover.Panel>
          </Popover>
        </div>

        <MobileMenu isDark={isDark} setTheme={setTheme} />
        
      </div>
    </nav>
  );
};
