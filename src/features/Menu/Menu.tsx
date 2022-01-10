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
      className="sticky top-0 w-full bg-white bg-opacity-70 flex flex-col justify-center py-3 md:py-6 lg:text-lg "
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
                    "flex flex-row items-center space-x-4 py-1 px-3 rounded-md bg-pink-600 text-white hover:bg-teal-800 transition-colors duration-300 "
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
                      type="text"
                      className="rounded-md  mt-2 px-3 py-1 text-teal-800 outline outline-1 outline-teal-800"
                    />
                  </div>
                  
                </Popover.Panel>
          </Popover>
        </div>
        {
          //  mobile menu layout
        }
        <MobileMenu />
        <button className=" md:hidden cursor-pointer" onClick={setTheme}>
            {!isDark ? (
              <HiOutlineMoon className="h-6 w-6 text-pink-600 " />
            ) : (
              <HiOutlineSun className="h-6 w-6 " />
            )}
          </button>
        <Popover className="">
          
              <Popover.Button
                className={
                  "md:hidden flex flex-row items-center py-1 px-2 rounded-md bg-pink-600 text-white hover:bg-teal-800 transition-colors duration-300 "
                }
              >
                <HiOutlineMenu className=" h-6 w-6 " />
              </Popover.Button>
              <Popover.Panel
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
                className="w-full  text-white z-10"
              >
                <div className=" bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <nav className="mx-auto flex w-4/5 flex-col items-sctretch justify-center gap-y-8">
                      <button className="-m-3 p-3 rounded-md uppercase bg-pink-600">
                        Shows
                      </button>
                      <button className="-m-3 p-3 rounded-md  uppercase bg-pink-600">
                        Movies
                      </button>
                      <button className="-m-3 p-3 rounded-md  uppercase bg-pink-600">
                        Trending
                      </button>
                      <button className="-m-3 p-3 rounded-md  uppercase bg-pink-600">
                        People
                      </button>
                    </nav>
                  </div>
                  <div className="mx-auto w-4/5 py-4 space-x-2 flex justify-center items-center text-pink-600">
                    <input
                      type="text"
                      className="rounded-md px-2 py-1 text-teal-800 outline outline-1 outline-teal-800"
                    />{" "}
                    <button
                      onClick={() => {
                        console.log("search");
                      }}
                      className="p-1"
                    >
                      <HiOutlineSearch className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                <div className="container bg-pink-600 flex flex-col space-y-4 justify-center items-center"></div>
              </Popover.Panel>
              
        </Popover>
      </div>
    </nav>
  );
};
