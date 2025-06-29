import React from "react";

const FilterBar = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "0.5rem",
        flexWrap: "wrap",
        marginBottom: "1.5rem",
      }}
    >
      <select
        name="type"
        value={filters.type}
        onChange={handleChange}
        style={{
          background: "#c9c9c9",
          borderRadius: "4px",
          padding: "4px",
          cursor: "pointer",
        }}
      >
        <option value="">Types</option>
        <option value="online">Online</option>
        <option value="offline">Offline</option>
      </select>

      <select
        name="category"
        value={filters.category}
        onChange={handleChange}
        style={{
          background: "#c9c9c9",
          borderRadius: "4px",
          padding: "4px",
          cursor: "pointer",
        }}
      >
        <option value="">Categories</option>
        <option value="workshop">Workshop</option>
        <option value="webinar">Webinar</option>
        <option value="meetup">Meetup</option>
      </select>

      <select
        name="date"
        value={filters.date}
        onChange={handleChange}
        style={{
          background: "#c9c9c9",
          borderRadius: "4px",
          padding: "4px",
          cursor: "pointer",
        }}
      >
        <option value="">Dates</option>
        <option value="today">Today</option>
        <option value="upcoming">Upcoming</option>
        <option value="past">Past</option>
      </select>
    </div>
  );
};

export default FilterBar;
