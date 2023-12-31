import React from "react";
import { Link } from "react-router-dom";
import Login from "../pages/Login";
function TopBar() {
  return (
    <nav class="bg-white border-gray-200 shadow-sm">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:p-7 p-12 ">
        <a class="hidden md:block flex  items-center">
          <span class="self-center text-2xl font-semibold whitespace-nowrap uppercase ">
            logo
          </span>
        </a>
        <div className="hidden lg:block font-semibold whitespace-nowrap text-2xl">
          Sticky Notes
        </div>
        <div class="flex absolute right-10 top-6 md:flex md:justify-center ">
          <Link to="/Login">
            <button
              type="button"
              id="menu button"
              class=" focus:ring-4 focus:ring-gray-300 "
            >
              <img
                class="w-10 h-10 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGf_8UZ3xLijdkOtv3qWnUpyknARbKMrcVJA&usqp=CAU"
              ></img>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
