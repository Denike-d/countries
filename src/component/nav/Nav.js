import React from "react";
import Toggle from "../Toggle";
import "./Nav.scss";

export default function Nav() {
  return (
    <>
      <div className="nav">
        <h3>Where in the world</h3>
        <Toggle />
      </div>
    </>
  );
}
