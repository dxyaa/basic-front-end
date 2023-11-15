import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
function App() {
  return (
    <div className="">
      <TopBar />
      <div>
        <SideBar />
        <div className="md:w-5/6 h-screen md:absolute md:right-0 bg-gray-100">
          <div className="text-2xl self-center text-center items-center justify-center font-semibold  bg-gray-100">
            <div className="flex flex-wrap -mx-4 -my-4 ">
              {[...Array(10)].map((_, index) => (
                <div key={index} className="w-1/3 px-4 py-4">
                  <div className="bg-gray-300 h-40 flex flex-col items-center justify-center rounded-md">
                    <p className="text-xl font-bold mb-2">Todo {index + 1}</p>
                    <p className="text-sm">Do the todo thingy asap.</p>
                  </div>
                </div>
              ))}
              <div className="w-1/3 px-4 py-4">
                <a className="bg-gray-300 h-40 flex flex-col items-center justify-center rounded-md hover:bg-gray-200">
                  <img
                    src="https://static.thenounproject.com/png/2310577-200.png"
                    className="h-8 w-8"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
