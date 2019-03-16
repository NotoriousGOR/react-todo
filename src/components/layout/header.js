import React from "react";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <div>
      <header style={headerStyle}>
        <h1>Todo List</h1>
        <Link to="/" style={linkStyle}>
          Home
        </Link>{" "}
        |{" "}
        <Link to="/about" style={linkStyle}>
          About
        </Link>
      </header>
    </div>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  padding: "2vw",
  borderBottom: "10px solid grey",
  marginBottom: "2vh"
};

const linkStyle = {
  color: "#fff",
  fontSize: "1rem",
  margin: "2vw"
};
