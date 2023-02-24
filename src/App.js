import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState, createContext } from "react";
import Home from "./component/home/Home";
import Details from "./Pages/details/Details";

import * as React from "react";
import Switch from "@mui/material/Switch";

export const ThemeContext = createContext(null);

function App() {
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const label = { inputProps: { "aria-label": "Size switch demo" } };
  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <div id={mode}>
        <div className="nav">
          <h3>Where in the world</h3>
          <Switch {...label} defaultChecked onClick={toggleMode}>
            Dark mode
          </Switch>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country-details/:index" element={<Details />} />
          </Routes>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
