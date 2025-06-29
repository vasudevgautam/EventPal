import React from "react";
import { useEventContext } from "../context/EventContext";
import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";

const MyEvents = () => {
  const { events, bookmarked } = useEventContext();

  const bookmarkedEvents = events.filter((event) =>
    bookmarked.includes(event.id)
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
        <h1 style={{ fontSize: "24px" }}>⭐ My Bookmarked Events ⭐ </h1>
        <Link
          to="/"
          style={{
            padding: "6px 12px",
            backgroundColor: "#e5e7eb",
            color: "#333",
            textDecoration: "none",
            borderRadius: "5px",
          }}
        >
          ← Back to Home
        </Link>
      </div>

      {bookmarkedEvents.length === 0 ? (
        <p style={{ marginTop: "1.5rem", color: "#555" }}>
          You haven’t bookmarked any events yet.
        </p>
      ) : (
        <div style={{ marginTop: "1.5rem" }}>
          {bookmarkedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyEvents;
