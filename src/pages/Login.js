import { Link } from "react-router-dom";
import Signup from "./Signup";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Mainpage from "./Mainpage";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded authentication data
    const hardcodedUsername = "abcd@abcd.com";
    const hardcodedPassword = "1234";

    // Check if the input matches the hardcoded credentials
    if (username === hardcodedUsername && password === hardcodedPassword) {
      console.log("Authentication successful!");

      // Redirect to another page upon successful login
      navigate("/mainpage");
    } else {
      console.log("Authentication failed. Please check your credentials.");
      // You can show an error message or take other actions upon failed login
    }
  };
  return (
    <div>
      <section class="bg-gray-50 ">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-gray-800 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl ">
                Sign in to your account :
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-white "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-800 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@company.com"
                    required=""
                    onChange={(e) => setUsername(e.target.value)}
                  ></input>
                  <div className="text-gray-300">
                    //Enter abcd@abcd.com for test user
                  </div>
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-white "
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-800 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required=""
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                  <div className="text-gray-300">
                    //Enter 1234 for test user
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <a
                    href="#"
                    class="text-sm font-medium text-primary-600 hover:underline text-blue-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  <a
                    href="#_"
                    class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
                  >
                    <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                    <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                      Login
                    </span>
                    <span class="absolute inset-0 border-2 border-white rounded-full"></span>
                  </a>
                </button>
                <p class="text-sm font-light text-gray-400 text-center">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    class="font-medium text-primary-600 hover:underline "
                  >
                    <Link to="/Signup">Sign up</Link>
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
