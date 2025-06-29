import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div style={{ padding: "2rem", textAlign: "center" }}>
    <h1>404 - Not Found</h1>
    <p> Oops! The page you're looking for doesn't exist.</p>
    <Link to="/" style={backBtnStyle}>
      Go To Home
    </Link>
  </div>
);
const backBtnStyle = {
  backgroundColor: "#b1b3b2",
  padding: "5px 10px",
  borderRadius: "5px",
  textDecoration: "none",
  color: "white",
  margin: "10px",
};
export default NotFound;
