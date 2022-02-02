import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  HiOutlineMenu,
  HiOutlineMoon,
  HiOutlineSearch,
  HiOutlineSun,
  HiX,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { links } from "./links";

type MobileMenuPropsType = {
  isDark: boolean;
  setDarkTheme: (dark: boolean) => void;
};

export const MobileMenu = (props: MobileMenuPropsType) => {
  const navigate = useNavigate();

  return (
    <>
      <button className=" md:hidden cursor-pointer">
        {!props.isDark ? (
          <HiOutlineMoon
            onClick={() => {
              props.setDarkTheme(true);
            }}
            className="h-6 w-6 text-pink-600 "
          />
        ) : (
          <HiOutlineSun
            onClick={() => {
              props.setDarkTheme(false);
            }}
            className="h-6 w-6 "
          />
        )}
      </button>
      <Popover className="relative z-10">
        {({ open }) => (
          <>
            <Popover.Button
              className={
                !open
                  ? "md:hidden  py-1 px-2 rounded-md bg-pink-600 text-white transition-all duration-500 "
                  : " py-1 px-2 rounded-md bg-gray-600 dark:bg-pink-600 text-white transition-all duration-500"
              }
            >
              {!open ? (
                <HiOutlineMenu className=" h-6 w-6 " />
              ) : (
                <HiX className=" h-6 w-6 " />
              )}
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-in duration-150"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-out duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                style={{ width: "300px" }}
                className="absolute text-white transform -translate-x-full left-12 top-10"
              >
                {({ close }) => (
                  <>
                    <div className="pt-4 rounded-md z-10 shadow-lg shadow-gray-600/40 ring-1 ring-gray-600 dark:ring-pink-600 ring-opacity-25 bg-white dark:bg-gray-800  divide-y-2 divide-pink-300 dark:divide-gray-500">
                      <div className="py-5 z-10">
                        <div className="mx-auto dark:text-gray-300  z-10 flex w-4/5 flex-col items-sctretch justify-center gap-y-8">
                          {links.map((link, i) => (
                            <button
                              key={i}
                              onClick={() => {
                                navigate(link);
                                window.scrollTo({ top: 0, behavior: "smooth" });
                                close();
                              }}
                              className="-m-3 p-3 rounded-md font-semibold uppercase bg-pink-600"
                            >
                              {link}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="mx-auto w-4/5 py-4 space-x-2 flex justify-center items-center text-pink-600">
                        <input
                          type="text"
                          className="rounded-md px-2 py-1 dark:bg-gray-300 text-gray-600 outline outline-1 outline-gray-600 dark:outline-pink-600  "
                        />{" "}
                        <button
                          onClick={() => {
                            console.log("search");
                          }}
                          className="p-1"
                        >
                          <HiOutlineSearch className="w-6 h-6 dark:text-gray-300" />
                        </button>
                      </div>
                    </div>

                    <div className="container bg-pink-600 flex flex-col space-y-4 justify-center items-center"></div>
                  </>
                )}
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};
