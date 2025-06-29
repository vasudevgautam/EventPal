import React from "react";
import { useEventContext } from "../context/EventContext";
import { Link } from "react-router-dom";
import { hover, motion } from "framer-motion";
const CalendarView = () => {
  const { events } = useEventContext();

  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto", padding: "1rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "24px" }}>📅 Calendar View</h1>
        <Link to="/" style={backBtnStyle}>
          ← Back
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {sortedEvents.length === 0 ? (
          <p style={{ marginTop: "1.5rem", color: "#666" }}>
            Sorry,No events found.
          </p>
        ) : (
          <ul style={{ marginTop: "2rem", listStyle: "none", padding: 0 }}>
            {sortedEvents.map((event) => (
              <li key={event.id} style={eventItemStyle}>
                <div style={{ fontSize: "14px", color: "#696868" }}>
                  {new Date(event.date).toDateString()}
                </div>
                <div
                  style={{ fontSize: "18px", fontWeight: "600", color: "#444" }}
                >
                  {event.title}
                </div>
                <div style={{ color: "#444" }}>
                  {event.type} • {event.location}
                </div>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
};

const eventItemStyle = {
  marginBottom: "1.5rem",
  padding: "1rem",
  borderLeft: "6px solid #1d4ed8",
  backgroundColor: "#c9c9c9",
  borderRadius: "6px",
};

const backBtnStyle = {
  backgroundColor: "#e5e7eb",
  padding: "6px 12px",
  borderRadius: "5px",
  textDecoration: "none",
  color: "#333",
};

export default CalendarView;
