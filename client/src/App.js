import { useState, useEffect } from "react";
import { Route, useHistory } from "react";
import { login, register, verify, logout } from "./services/user";
// components
import Layout from "./layout/layout/Layout.jsx";
import Main from "./screens/Main.jsx";

import "./App.css";

function App() {
  return (
    <div>
      <Layout className="App">
        <Main />
      </Layout>
    </div>
  );
}

export default App;
