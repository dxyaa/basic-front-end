// AppRouter.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Mainpage from "./pages/Mainpage";
import Upcoming from "./pages/Upcoming";
import Completed from "./pages/Completed";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Mainpage" element={<Mainpage />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Upcoming" element={<Upcoming />} />
          <Route path="Completed" element={<Completed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
