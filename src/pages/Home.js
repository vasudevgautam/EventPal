import React, { useState } from "react";
import { useEventContext } from "../context/EventContext";
import EventCard from "../components/EventCard";
import FilterBar from "../components/FilterBar";
import { Link } from "react-router-dom";
import ScrollSection from "../components/ScrollSection";

const Home = () => {
  const { events } = useEventContext();

  const [filters, setFilters] = useState({
    type: "",
    category: "",
    date: "",
  });

  const applyFilters = (event) => {
    const now = new Date();

    const matchType = filters.type ? event.type === filters.type : true;
    const matchCategory = filters.category
      ? event.category === filters.category
      : true;

    const eventDate = new Date(event.date);
    let matchDate = true;

    if (filters.date === "today") {
      matchDate = eventDate.toDateString() === now.toDateString();
    } else if (filters.date === "upcoming") {
      matchDate = eventDate > now;
    } else if (filters.date === "past") {
      matchDate = eventDate < now;
    }

    return matchType && matchCategory && matchDate;
  };

  const filteredEvents = events.filter(applyFilters);

  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto", padding: "2rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "30px" }}> Discover Events</h1>
        <Link
          to="/create"
          style={{
            padding: "8px 16px",
            backgroundColor: "#1d4ed8",
            color: "white",
            borderRadius: "5px",
            textDecoration: "none",
          }}
        >
          + Create Event
        </Link>
      </div>

      <FilterBar filters={filters} setFilters={setFilters} />

      {filteredEvents.length === 0 ? (
        <p style={{ marginTop: "1rem", color: "#666" }}>
          No matching events found.
        </p>
      ) : (
        filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))
      )}

      <div style={{ padding: "2rem" }}>
        <h2> Welcome to EventPal</h2>

        <ScrollSection>
          <h2>⌚ Trending Events</h2>
          <p>Don't miss our most popular upcoming sessions.</p>
        </ScrollSection>

        <ScrollSection>
          <h2>🛠 Workshops</h2>
          <p>Improve your skills by joining in-person or online workshops.</p>
        </ScrollSection>

        <ScrollSection>
          <h2>💡 Webinars</h2>
          <p>Free live sessions from industry experts every week.</p>
        </ScrollSection>
      </div>
    </div>
  );
};

export default Home;
