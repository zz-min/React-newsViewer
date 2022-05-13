import React from "react";
import { Outlet } from "react-router-dom";
import Categories from "./components/Categories";

function App() {
  return (
    <div>
      <Categories />
      <Outlet />
    </div>
  );
}

export default App;
