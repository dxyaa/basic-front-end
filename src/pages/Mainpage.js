import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import Login from "./Login";
import Create from "./Create";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import deleteicon from "../images/deleteicon.png";
import editicon from "../images/editicon.png";
import TodosData from "../data/TodosData.json";
const Mainpage = (props) => {
  //const todos = TodosData;
  const [todos, setTodos] = useState(TodosData);
  const [selectedTodoId, setSelectedTodoId] = useState(null);
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log("selectedTodoId", selectedTodoId);
    if (selectedTodoId !== null && inputRef.current !== null) {
      inputRef.current.focus();
    }
  }, [selectedTodoId]);

  const handleEdit = (todoId) => {
    setSelectedTodoId(todoId);
    //inputRef.current.focus();
  };

  const handleDelete = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const handleSaveEdit = (todoId, updatedContent) => {
    const index = todos.findIndex((todo) => todo.id === todoId);
    const updatedTodos = [...todos];
    updatedTodos[index].content = updatedContent;
    setTodos(updatedTodos);
    setSelectedTodoId(null);
  };
  const handleInputChange = (value) => {
    const index = todos.findIndex((todo) => todo.id === selectedTodoId);
    const updatedTodos = [...todos];
    updatedTodos[index].content = value;
    setTodos(updatedTodos);
  };
  return (
    <div>
      <TopBar />

      <div>
        <SideBar />

        <div className="md:w-5/6 h-screen md:absolute md:right-0 bg-gray-100 items-center">
          <div className="text-2xl self-center text-center items-center justify-center font-semibold  bg-gray-100">
            <div className="flex flex-col -mx-4 -my-4 lg:flex-wrap lg:flex-row justify-center items-center">
              {todos.map((todo) => {
                return (
                  <div key={todo.id} className="lg:w-1/3 w-1/2 px-4 py-4">
                    <a>
                      <div className="bg-gray-300 h-40 flex flex-col items-center justify-between rounded-md">
                        <div className="flex flex-col items-center justify-center">
                          <p className="text-xl font-bold mb-2 mt-4">
                            Todo {todo.id}
                          </p>

                          <p className="text-sm  overflow-hidden text-ellipsis ">
                            {todo.content}
                          </p>
                        </div>
                        <div className="flex justify-between p-2">
                          <a
                            className="p-1 hover:bg-blue-400 rounded-md"
                            onClick={() => handleEdit(todo.id)}
                          >
                            <img
                              src={editicon}
                              className="h-5 w-5"
                              alt="Edit icon"
                            />
                          </a>
                          {selectedTodoId === todo.id && (
                            <div>
                              <input
                                ref={inputRef}
                                className="shadow border rounded w-full py-1 px-1 text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                value={
                                  todos.find((t) => t.id === selectedTodoId)
                                    ?.content || ""
                                }
                                onChange={(e) =>
                                  handleInputChange(e.target.value)
                                }
                                onBlur={() =>
                                  handleSaveEdit(
                                    selectedTodoId,
                                    inputRef.current.value
                                  )
                                }
                              />

                              <div className="  flex flex-col justify-center items-center text-center">
                                <button
                                  onClick={() =>
                                    handleSaveEdit(todo.id, todo.content)
                                  }
                                  className="text-base hover:bg-gray-400 rounded-md w-1/4"
                                >
                                  Save
                                </button>
                                <button
                                  onClick={() => setSelectedTodoId(null)}
                                  className="text-base hover:bg-gray-400 rounded-md w-1/4 "
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          )}
                          <a
                            className="p-1 hover:bg-red-300 rounded-md"
                            onClick={() => handleDelete(todo.id)}
                          >
                            <img
                              type="delete icon"
                              src={deleteicon}
                              className="h-5 w-5"
                              alt="Delete Icon"
                            />
                          </a>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}

              <div className="lg:w-1/3 w-1/2 px-4 py-4">
                <Link to="/Create">
                  <a className="bg-gray-300 h-40 flex flex-col items-center justify-center rounded-md hover:bg-gray-200">
                    <img
                      src="https://static.thenounproject.com/png/2310577-200.png"
                      className="h-8 w-8"
                      id="create_icon"
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
};

export default Mainpage;
