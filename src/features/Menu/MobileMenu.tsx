import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import {
  HiOutlineMenu,
  HiOutlineMoon,
  HiOutlineSearch,
  HiOutlineSun,
  HiX,
} from "react-icons/hi";
import { usePopper } from "react-popper";

type MobileMenuPropsType = {
  isDark: boolean;
  setTheme: () => void;
};

export const MobileMenu = (props: MobileMenuPropsType) => {
  return (
    <>
      <button className=" md:hidden cursor-pointer" onClick={props.setTheme}>
        {!props.isDark ? (
          <HiOutlineMoon className="h-6 w-6 text-pink-600 " />
        ) : (
          <HiOutlineSun className="h-6 w-6 " />
        )}
      </button>
      <Popover className="relative z-10">
        {({ open }) => (
          <>
            <Popover.Button
              className={
                  !open
                ? "md:hidden  py-1 px-2 rounded-md bg-pink-600 text-white transition-all duration-500 "
                : " py-1 px-2 rounded-md bg-gray-600 text-white transition-all duration-500"
            }
            >
                {
                    !open 
                    ? <HiOutlineMenu className=" h-6 w-6 " />
                    : <HiX className=" h-6 w-6 " />
                }
              
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                style={{ width: "300px" }}
                className="absolute  text-white transform -translate-x-full left-12 top-10"
              >
                <div className="pt-4 rounded-md z-10 shadow-md ring-2 ring-gray-600 ring-opacity-25 bg-white divide-y-2 divide-pink-200">
                  <div className="py-5 z-10">
                    <div className="mx-auto  z-10 flex w-4/5 flex-col items-sctretch justify-center gap-y-8">
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
                    </div>
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
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};
