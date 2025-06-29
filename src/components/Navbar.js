import React, { useState, useEffect, hover } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import { useEventContext } from "../context/EventContext";
import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const { user, logout } = useAuth();
  const { events } = useEventContext();
  const [isMobile, setIsMobile] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const featuredEvent = events[0];
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 650);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    padding: "5px 8px",
    borderRadius: "4px",
    backgroundColor: "#2563eb",
    whiteSpace: "nowrap",
    fontSize: "14px",
  };
  const rightSectionStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    flexWrap: "wrap",
  };
  return (
    <nav
      style={{
        backgroundColor: theme === "dark" ? "#1f2937" : "#1d4ed8",
        padding: "6px 8px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#fff",
        borderRadius: "4px",
        flexWrap: "wrap",
        gap: "0.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <Link to="/" style={linkStyle}>
            Home
          </Link>
          <Link to="/my-events" style={linkStyle}>
            My Events
          </Link>
        </div>
        {isMobile && (
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              style={{
                background: "transparent",
                border: "none",
                textDecoration: "none",
                color: "#fff",
                padding: "0",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "20px",
              }}
            >
              ⬇️
            </button>
            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  key="dropdown"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: "absolute",

                    background: "#2563eb",
                    padding: "0.1rem",
                    borderRadius: "6px",
                    marginTop: "0.5rem",
                    zIndex: 10,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.1rem",
                  }}
                >
                  <Link
                    to="/create"
                    style={linkStyle}
                    onClick={() => setShowDropdown(false)}
                  >
                    Create
                  </Link>
                  <Link
                    to="/calendar"
                    style={linkStyle}
                    onClick={() => setShowDropdown(false)}
                  >
                    Calendar
                  </Link>
                  {user && featuredEvent && (
                    <Link
                      to={`/event/${featuredEvent.id}`}
                      style={linkStyle}
                      onClick={() => setShowDropdown(false)}
                    >
                      Event Detail
                    </Link>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
        {!isMobile && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            <Link to="/create" style={linkStyle}>
              Create
            </Link>
            <Link to="/calendar" style={linkStyle}>
              Calendar
            </Link>
            {user && featuredEvent && (
              <Link to={`/event/${featuredEvent.id}`} style={linkStyle}>
                Event Detail
              </Link>
            )}
          </div>
        )}
      </div>
      <div style={rightSectionStyle}>
        <button
          onClick={toggleTheme}
          title={hover === "☀️" ? "Dark" : "Light"}
          style={{
            background: "transparent",
            border: "none",
            textDecoration: "none",
            color: "#fff",
            padding: "5px 8px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
        {user ? (
          <>
            <span> 👨‍💻{user.username} </span>
            <button
              title="Logout"
              onClick={logout}
              style={{
                ...linkStyle,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                fontSize: "18px",
                padding: 0,
                background: "#f0edeb",
              }}
            >
              👤
            </button>
          </>
        ) : (
          <Link
            to="/login"
            title="Login"
            style={{
              ...linkStyle,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              fontSize: "18px",
              padding: 0,
              background: "#f0edeb",
            }}
          >
            👤
          </Link>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
