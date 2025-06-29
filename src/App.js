import React from "react";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import CreateEvent from "./pages/CreateEvent";

import NotFound from "./pages/NotFound";
import MyEvents from "./pages/MyEvents";
import EventDetail from "./pages/EventDetail";
import Navbar from "./components/Navbar";
import CalendarView from "./pages/CalendarView";
import EditEvent from "./pages/EditEvent";
import Login from "./pages/Login";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { user } = useAuth();
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/create"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {user ? <CreateEvent /> : <Login />}
            </motion.div>
          }
        />

        <Route
          path="/my-events"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <MyEvents />
            </motion.div>
          }
        />

        <Route path="/calendar" element={<CalendarView />} />
        <Route
          path="/event/:id"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <EventDetail />
            </motion.div>
          }
        />
        <Route path="/edit/:id" element={<EditEvent />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
