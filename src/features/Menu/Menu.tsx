import { Popover } from "@headlessui/react";
import React, { ReactHTML, ReactHTMLElement, useState } from "react";
import { HiOutlineMoon, HiOutlineSearch, HiOutlineSun } from "react-icons/hi";
import { usePopper } from "react-popper";
import logo from "../../assets/img/logo.svg";

export const Menu = () => {


  let [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>(null)
  let [popperElement, setPopperElement] = useState<HTMLDivElement | null>()
  let { styles, attributes } = usePopper(referenceElement, popperElement)
  
  const [isDark, setIsDark] = useState(false);
  const setTheme = () => setIsDark(!isDark);

  return (
    <nav className="sticky top-0 w-full bg-white bg-opacity-70 flex flex-col justify-center py-6 md:text-lg ">
      <div className="container mx-auto flex flex-row justify-around px-6">
        <button className="">
          <img src={logo} className="logo h-6 lg:h-8" alt="logo" />
        </button>
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
          <Popover className=" flex items-center">
            {({ open }) => (
              <>
                <Popover.Button ref={setReferenceElement} className={''}>
                  <HiOutlineSearch className=" h-6 w-6 text-pink-600 " />
                </Popover.Button>
                <Popover.Overlay
                  className={`${
                    open ? "opacity-30 fixed inset-0" : "opacity-0"
                  } bg-black`}
                />

                <Popover.Panel ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper} className=" w-40 bg-stone-500 z-10">
                  search people, movies, tv shows here 
                  <input type="text" />
                </Popover.Panel>
              </>
            )}
          </Popover>
        </div>
      </div>
    </nav>
  );
};
