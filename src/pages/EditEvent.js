import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEventContext } from "../context/EventContext";
import { flushKeyframeResolvers } from "framer-motion";

const EditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { events, setEvents } = useEventContext();

  const eventToEdit = events.find((e) => e.id === id);

  const [formData, setFormData] = useState(
    eventToEdit || {
      title: "",
      description: "",
      date: "",
      location: "",
      type: "",
      category: "",
    }
  );

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedList = events.map((ev) => (ev.id === id ? formData : ev));
    setEvents(updatedList);
    navigate("/");
  };

  if (!eventToEdit) return <p>Event not found</p>;

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "2rem auto",
        border: "2px solid #606161",
        borderRadius: "8px",
        background: "#eac3f7",
        padding: "15px",
        color: "black",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexFlow: "column",
      }}
    >
      <h2 style={{ textAlign: "center", color: "black" }}>Edit Event</h2>
      <form onSubmit={handleSubmit}>
        {["title", "description", "location"].map((field) => (
          <div key={field}>
            <label>{field}:</label>
            <input
              name={field}
              value={formData[field]}
              onChange={handleChange}
              style={{ width: "95%", padding: "6px", borderRadius: "4px" }}
            />
          </div>
        ))}

        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          style={{ width: "95%", padding: "6px", borderRadius: "4px" }}
        />

        <label>Type:</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          style={{ width: "97%", padding: "6px", borderRadius: "4px" }}
        >
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>

        <label>Category:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          style={{ width: "97%", padding: "6px", borderRadius: "4px" }}
        >
          <option value="workshop">Workshop</option>
          <option value="webinar">Webinar</option>
          <option value="meetup">Meetup</option>
        </select>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            type="submit"
            style={{
              background: "#4441fa",
              margin: "15px",
              padding: "6px 12px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
              color: "white",
            }}
          >
            Save Changes
          </button>
          <Link to="/" style={backBtnStyle}>
            ← Back To Home
          </Link>
        </div>
      </form>
    </div>
  );
};
const backBtnStyle = {
  backgroundColor: "#4441fa",
  padding: "5px 10px",
  borderRadius: "5px",
  textDecoration: "none",
  color: "white",
  margin: "10px",
};

export default EditEvent;
