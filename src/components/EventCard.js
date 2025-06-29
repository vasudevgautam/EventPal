import React from "react";
import { Link } from "react-router-dom";
import { useEventContext } from "../context/EventContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const EventCard = ({ event }) => {
  const navigate = useNavigate();
  const { bookmarked, toggleBookmark, events, setEvents } = useEventContext();

  const isBookmarked = bookmarked.includes(event.id);

  const deleteEvent = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (!confirmed) return;

    const updated = events.filter((e) => e.id !== event.id);
    setEvents(updated);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      style={{
        padding: "1rem",
        borderRadius: "8px",
        border: "1px solid #ddd",
        marginBottom: "1rem",
        background: "rgba(114, 248, 252,0.4)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p>
        {event.date} • {event.location}
      </p>
      <p>
        {event.category} • {event.type}
      </p>

      <div
        style={{
          marginTop: "10px",
          display: "flex",
          gap: "0.5rem",
        }}
      >
        <Link to={`/event/${event.id}`}>View</Link>
        <button onClick={() => toggleBookmark(event.id)}>
          {isBookmarked ? "★ Unbookmark" : "☆ Bookmark"}
        </button>
        <button onClick={() => navigate(`/edit/${event.id}`)}>Edit</button>
        <button onClick={deleteEvent}> Delete</button>
      </div>
    </motion.div>
  );
};
export default EventCard;
