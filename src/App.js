// AppRouter.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Create from "./pages/Create";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Mainpage from "./pages/Mainpage";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Mainpage" element={<Mainpage />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
