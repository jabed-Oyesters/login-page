import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Login from "./authenticationPage/Login";
function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
