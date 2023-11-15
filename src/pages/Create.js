import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Create = () => {
  const handleCreatePost = () => {
    toast.success("Post created successfully!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000,
    });
  };
  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-md shadow-md w-96">
          <h1 className="text-2xl font-semibold mb-4">
            Create New Sticky Note
          </h1>

          <textarea
            className="w-full h-32 border border-gray-300 p-2 mb-4"
            placeholder="Enter your content..."
          ></textarea>

          <button
            className="text-center items-center flex justify-center"
            onClick={handleCreatePost}
          >
            <a
              href="#_"
              class="relative inline-flex items-center justify-center p-4 px-2 py-1 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-black rounded-full shadow-md group"
            >
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
                Create
              </span>
              <span class="relative invisible">Button Text</span>
            </a>
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Create;
