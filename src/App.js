import React from "react";
import { Swtich, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { NavBar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main"></div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
