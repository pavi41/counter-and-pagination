import React from "react";
import "./App.css";
import Pagination from "./Pagination";
import Counter from "./Counter";

const App = () => {
  return (
    <div className="app">
      <Counter />
      <Pagination />
    </div>
  );
};

export default App;
