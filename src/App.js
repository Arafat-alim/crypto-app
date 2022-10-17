import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  NavBar,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";
import "./App.css";

const App = () => (
  <div className="app">
    <div className="navbar">
      <NavBar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            {/* Exchange for pro Subscriber */}
            {/* <Route exact path="/exchanges">
              <Exchanges />
            </Route> */}
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title
          level={5}
          style={{ color: "#fff", textAlign: "center" }}
        >
          <br />
          <Link to="/">Made With ❤ Arafat Alim</Link>
          <br />
          Copyright &copy; All Rights Reserved
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          {/* Exhange is for Pro subscriber */}
          {/* <Link to="/exchanges">Exchanges</Link> */}
          <Link to="/news">News</Link>
        </Space>
        {/* <Typography.Title
          level={5}
          style={{ color: "#fff", textAlign: "center" }}
        ></Typography.Title> */}
      </div>
    </div>
  </div>
);
export default App;
