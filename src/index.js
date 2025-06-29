import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { EventProvider } from "./context/EventContext";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <ThemeProvider>
        <EventProvider>
          <App />
        </EventProvider>
      </ThemeProvider>
    </AuthProvider>
  </BrowserRouter>
);
