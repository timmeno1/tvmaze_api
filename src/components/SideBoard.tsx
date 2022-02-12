import { Disclosure, Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { HiCheck, HiChevronDown, HiSelector } from "react-icons/hi";

export const SideBoard = () => {
  const sorts = [
    { name: "Popularity Descending" },
    { name: "Popularity Ascending" },
    { name: "Rating Descending" },
    { name: "Rating Ascending" },
    { name: "Release Date Descending" },
    { name: "Release Date Ascending" },
    { name: "Title (A-Z)" },
    { name: "Title (Z-A)" },
  ];

  const [selected, setSelected] = useState(sorts[0]);

  return (
    <div className=" flex flex-col gap-y-3 md:w-44 xl:w-64 md:ring-2 ring-pink-600 ring-opacity-50 p-2 rounded-lg md:shadow-lg ">
      <Disclosure as="div" className=" w-1/2 md:w-full mx-auto">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-center bg-pink-100 dark:bg-pink-200 dark:hover:bg-pink-300 rounded-lg hover:bg-pink-200 focus:outline-none focus-visible:ring focus-visible:ring-pink-600 focus-visible:ring-opacity-75">
              <span className="text-base md:text-lg font-semibold">Sort</span>
              <HiChevronDown
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 text-pink-600`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="pt-4 pb-2 text-sm text-gray-600">

        <h3 className="font-semibold text-center dark:text-gray-100">Sort Results By</h3>
              <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white dark:bg-gray-300 rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-pink-600 focus-visible:border-pink-600 ">
                    <span className="block truncate text-pink-600">{selected.name}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <HiSelector
                        className="w-5 h-5 text-pink-600"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute w-full md:min-w-56 z-20 py-1 mt-1 overflow-auto text-base bg-white dark:bg-gray-400 rounded-md shadow-lg max-h-60 ring-1 ring-slate-600 ring-opacity-5 focus:outline-none sm:text-sm">
                      {sorts.map((sort, i) => (
                        <Listbox.Option
                          key={i}
                          className={({ active }) =>
                            `${
                              active
                                ? "text-pink-600 bg-slate-200"
                                : "text-gray-600 dark:text-gray-100"
                            }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                          }
                          value={sort}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`${
                                  selected ? "font-medium" : "font-normal"
                                } block truncate`}
                              >
                                {sort.name}
                              </span>
                              {selected ? (
                                <span
                                  className={`${
                                    active ? "text-pink-600" : "text-pink-600"
                                  }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                >
                                  <HiCheck
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="w-1/2 md:w-full mx-auto">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-left bg-pink-100  dark:bg-pink-200 dark:hover:bg-pink-300 rounded-lg hover:bg-pink-200 focus:outline-none focus-visible:ring focus-visible:ring-pink-600 focus-visible:ring-opacity-75">
              <span className="text-base md:text-lg font-semibold">
                Filters
              </span>
              <HiChevronDown
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 text-pink-600`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-600 dark:text-gray-100 flex flex-col divide-y divide-slate-200">
                <div className="p-4">
                    Keywords
                </div>
                <div className="p-4">
                    Release Date
                </div>
                <div className="p-4">
                    Genres
                </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <button className="mt-2 mx-auto max-w-max px-4 py-2  text-center bg-pink-600 rounded-lg hover:bg-pink-500 focus:outline-none focus-visible:ring focus-visible:ring-pink-600 focus-visible:ring-opacity-75 text-base md:text-lg font-semibold text-white">
        Search
      </button>
    </div>
  );
};
