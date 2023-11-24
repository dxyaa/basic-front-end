import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Upcoming from "../pages/Upcoming";
import Completed from "../pages/Completed";
function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="md:fixed md:top-0 md:left-0 md:w-1/6 shadow-md">
      <div className="hidden md:block ">
        <div className="flex-col flex">
          <div className="flex bg-gray-100 h-screen overflow-x-hidden">
            <div className="bg-white lg:flex md:w-full md:flex-col hidden">
              <div className="flex-col pt-5 flex overflow-y-auto">
                <div className="h-full flex-col justify-between px-4 flex">
                  <div className="space-y-4">
                    <a
                      href="#"
                      className="font-medium text-lg items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                            transition-all duration-200  group cursor-pointer"
                    >
                      <span className="uppercase flex jusitfy-center items-center text-center font-semibold mb-5">
                        logo
                      </span>
                    </a>
                    <div className="uppercase font-bold"> tasks</div>
                    <div className=" bg-top bg-cover space-y-2">
                      <Link
                        to="/Upcoming"
                        href="#"
                        className="mt-10 font-medium text-lg items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                            transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                      >
                        <span className="justify-center items-center flex">
                          <span className="items-center justify-center flex">
                            <img
                              className="flex-shrink-0 w-5 h-5 mr-5"
                              src="https://cdn-icons-png.flaticon.com/512/50/50621.png"
                            ></img>
                          </span>
                        </span>
                        <span>
                          Upcoming
                          <a className="absolute end-0 mr-6 h">
                            <div className="h-6 w-8 bg-gray-200 text-sm text-gray-600 rounded-md text-center">
                              9
                            </div>
                          </a>
                        </span>
                      </Link>
                      <Link
                        to="/Completed"
                        href="#"
                        className="font-medium text-lg items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                            transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                      >
                        <span className="justify-center items-center flex">
                          <span className="items-center justify-center flex">
                            <img
                              className="flex-shrink-0 w-6 h-6 mr-4"
                              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/bullet-point-3775803-3154146.png?f=webp"
                            ></img>
                          </span>
                        </span>
                        <span>
                          Completed
                          <a className="absolute end-0 mr-6 h">
                            <div className="h-6 w-8 bg-gray-200 text-sm text-gray-600 rounded-md text-center">
                              10
                            </div>
                          </a>
                        </span>
                      </Link>
                      <a
                        href="#"
                        className="font-medium text-lg items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                            transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
                      >
                        <span className="justify-center items-center flex">
                          <span className="items-center justify-center flex">
                            <img
                              className="flex-shrink-0 w-7 h-7 mr-4"
                              src="https://cdn-icons-png.flaticon.com/512/4269/4269480.png"
                            ></img>
                          </span>
                        </span>
                        <span>Services</span>
                      </a>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="font-medium text-lg items-center rounded-lg text-gray-900 px-4 py-2.5 flex absolute bottom-10
                            transition-all duration-200  group cursor-pointer"
                  >
                    <span className="justify-center items-center flex">
                      <span className="items-center justify-center flex">
                        <img
                          className="flex-shrink-0 w-6 h-5 mr-4"
                          src="https://cdn-icons-png.flaticon.com/512/876/876779.png"
                        ></img>
                      </span>
                    </span>
                    <span>
                      <button className="text-red-700 hover:text-red-400 underline">
                        Sign Out
                      </button>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="-mr-2 flex md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="bg-transparent inline-flex items-center justify-center p-2 rounded-md absolute top-5 left-8 "
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {!isOpen ? (
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149719.png"
              className="h-9 w-9"
            ></img>
          ) : (
            <img
              src="https://www.freeiconspng.com/uploads/close-button-png-28.png"
              className="h-8 w-8"
            ></img>
          )}
        </button>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden bg-gray-100" id="mobile-menu">
            <div
              ref={ref}
              className=" space-y-1 sm:px-3 rounded-md w-1/2 ml-5 mt-4 mb-4  bg-blue-100 items-center flex justify-center items-center text-center flex-col"
            >
              <Link
                to="/Upcoming"
                href="#"
                className="mt-10 font-medium text-lg items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                            transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
              >
                <span className="justify-center items-center flex">
                  <span className="items-center justify-center flex">
                    <img
                      className="flex-shrink-0 w-5 h-5 mr-5"
                      src="https://cdn-icons-png.flaticon.com/512/50/50621.png"
                    ></img>
                  </span>
                </span>
                <span>Upcoming</span>
              </Link>
              <Link
                to="/Completed"
                href="#"
                className="font-medium text-lg items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                            transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
              >
                <span className="justify-center items-center flex">
                  <span className="items-center justify-center flex">
                    <img
                      className="flex-shrink-0 w-6 h-6 mr-4"
                      src="https://cdn.iconscout.com/icon/premium/png-256-thumb/bullet-point-3775803-3154146.png?f=webp"
                    ></img>
                  </span>
                </span>
                <span>Completed</span>
              </Link>
              <a
                href="#"
                className="font-medium text-lg items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                            transition-all duration-200 hover:bg-gray-200 group cursor-pointer"
              >
                <span className="justify-center items-center flex">
                  <span className="items-center justify-center flex">
                    <img
                      className="flex-shrink-0 w-7 h-7 mr-4"
                      src="https://cdn-icons-png.flaticon.com/512/4269/4269480.png"
                    ></img>
                  </span>
                </span>
                <span>Services</span>
              </a>
              <a
                href="#"
                className="font-medium text-lg items-center rounded-lg text-gray-900 px-4 py-2.5 flex 
                            transition-all duration-200  group cursor-pointer"
              >
                <span className="justify-center items-center flex">
                  <span className="items-center justify-center flex">
                    <img
                      className="flex-shrink-0 w-6 h-5 mr-4"
                      src="https://cdn-icons-png.flaticon.com/512/876/876779.png"
                    ></img>
                  </span>
                </span>
                <span>
                  <button className="text-red-700 hover:text-red-400 underline">
                    Sign Out
                  </button>
                </span>
              </a>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default SideBar;
