import { Transition } from "@headlessui/react";
import React, { useState } from 'react';

function SideBar (){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <nav className='md:fixed md:top-0 md:left-0 md:w-1/6 shadow-md'>
        <div className="hidden md:block ">
          <div className="flex-col flex">
            <div className="flex bg-gray-100 h-screen overflow-x-hidden">
              <div className="bg-white lg:flex md:w-full md:flex-col hidden">
                <div className="flex-col pt-5 flex overflow-y-auto">
                  <div className="h-full flex-col justify-between px-4 flex">
                    <div className="space-y-4">

                      <a href="#" className="font-medium text-lg items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                            transition-all duration-200  group cursor-pointer">

                        <span className='uppercase flex jusitfy-center items-center text-center font-semibold'>logo</span>
                      </a>
                      <div className=" bg-top bg-cover space-y-6">

                        <a href="#" className="mt-10 font-medium text-lg items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                            transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                          <span className="justify-center items-center flex">
                            <span className="justify-center items-center flex">
                              <span className="justify-center items-center flex">
                                <span className="items-center justify-center flex">
                                  <img className="flex-shrink-0 w-6 h-6 mr-4" src="https://cdn-icons-png.flaticon.com/512/25/25694.png">
                                  </img>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span>Dashboard</span>
                        </a>
                        <a href="#" className="font-medium text-lg items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                            transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                          <span className="justify-center items-center flex">
                            <span className="justify-center items-center flex">
                              <span className="justify-center items-center flex">
                                <span className="items-center justify-center flex">
                                  <img className="flex-shrink-0 w-5 h-5 mr-6" src="https://cdn-icons-png.flaticon.com/256/1/1176.png">
                                  </img>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span>About</span>
                        </a>
                        <a href="#" className="font-medium text-lg items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                            transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                          <span className="justify-center items-center flex">
                            <span className="justify-center items-center flex">
                              <span className="justify-center items-center flex">
                                <span className="items-center justify-center flex">
                                  <img className="flex-shrink-0 w-7 h-7 mr-4" src="https://cdn-icons-png.flaticon.com/512/4269/4269480.png">
                                  </img>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span>Services</span>
                        </a>
                      </div>
                    </div>
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
              <img src="https://cdn-icons-png.flaticon.com/512/149/149719.png" className='h-9 w-9'>
              </img>
            ) : (
              <img src="https://www.freeiconspng.com/uploads/close-button-png-28.png" className='h-8 w-8'>
              </img>
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
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 h-screen  bg-blue-100 items-center flex justify-center flex-col">
                <a href="#" className="font-medium text-2xl items-center flex justify-center rounded-lg text-gray-900 px-4 py-2.5 flex
                            transition-all duration-200 hover:bg-gray-200  group cursor-pointer">
                  <span className="justify-center items-center flex">
                    <span className="justify-center items-center flex">
                      <span className="justify-center items-center flex">
                        <span className="items-center justify-center flex">
                          <img className="flex-shrink-0 w-6 h-6 mr-4 " src="https://cdn-icons-png.flaticon.com/512/25/25694.png">
                          </img>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span>Dashboard</span>
                </a>
                <a href="#" className="font-medium text-2xl items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                            transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                  <span className="justify-center items-center flex">
                    <span className="justify-center items-center flex">
                      <span className="justify-center items-center flex">
                        <span className="items-center justify-center flex">
                          <img className="flex-shrink-0 w-5 h-5 mr-6" src="https://cdn-icons-png.flaticon.com/256/1/1176.png">
                          </img>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span>About</span>
                </a>
                <a href="#" className="font-medium text-2xl items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                            transition-all duration-200 hover:bg-gray-200 group cursor-pointer">
                  <span className="justify-center items-center flex">
                    <span className="justify-center items-center flex">
                      <span className="justify-center items-center flex">
                        <span className="items-center justify-center flex">

                          <img className="flex-shrink-0 w-7 h-7 mr-4" src="https://cdn-icons-png.flaticon.com/512/4269/4269480.png">
                          </img>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span>Services</span>
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    );
}

export default SideBar;