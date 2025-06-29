import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    login(username.trim());
    navigate("/");
  };

  return (
    <div
      style={{
        border: "2px solid black",
        borderRadius: "10px",
        maxWidth: "400px",
        margin: "3rem auto",
        padding: "2rem",
        height: "250px",
        background: "#d2d5fc",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#080808" }}>
        {" "}
        Login to EventPal
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "95%",
            padding: "10px",
            marginTop: "1rem",
            background: "#e8e9eb",
            fontWeight: "bold",
            borderRadius: "6px",
          }}
        />
        <button
          type="submit"
          style={{
            marginTop: "1rem",
            width: "100%",
            padding: "10px",
            backgroundColor: "#1d4ed8",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
