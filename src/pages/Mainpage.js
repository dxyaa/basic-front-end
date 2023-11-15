import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import Login from "./Login";
import Create from "./Create";
import { Link } from "react-router-dom";

function Mainpage() {
  return (
    <div className="">
      <TopBar />
      <div>
        <SideBar />
        <div className="md:w-5/6 h-screen md:absolute md:right-0 bg-gray-100">
          <div className="text-2xl self-center text-center items-center justify-center font-semibold  bg-gray-100">
            <div className="flex flex-wrap -mx-4 -my-4 ">
              {[...Array(7)].map((_, index) => (
                <div key={index} className="w-1/3 px-4 py-4">
                  <div className="bg-gray-300 h-40 flex flex-col items-center justify-between rounded-md">
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-xl font-bold mb-2 mt-4">
                        Todo {index + 1}
                      </p>
                      <p className="text-sm">Do the todo thingy asap.</p>
                    </div>
                    <div className="flex items-end justify-end p-1 hover:bg-red-100 rounded-md">
                      <a>
                        {" "}
                        <img
                          type="delete icon"
                          src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                          className="h-5 w-5 cursor-pointer"
                          alt="Delete Icon"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              <div className="w-1/3 px-4 py-4">
                <Link to="/Create">
                  <a className="bg-gray-300 h-40 flex flex-col items-center justify-center rounded-md hover:bg-gray-200">
                    <img
                      src="https://static.thenounproject.com/png/2310577-200.png"
                      className="h-8 w-8"
                    ></img>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
