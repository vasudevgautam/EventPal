import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEventContext } from "../context/EventContext";
import { v4 as uuidv4 } from "uuid";

const CreateEvent = () => {
  const { addEvent } = useEventContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    type: "online",
    category: "workshop",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    const newEvent = {
      id: uuidv4(),
      ...formData,
    };

    addEvent(newEvent);
    navigate("/");
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "2rem auto",
        border: "2px solid black",
        padding: "20px",
        borderRadius: "15px",
        background: "rgba(125,124,125,0.4",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        ➕ Create New Event ➕
      </h2>

      <form onSubmit={handleSubmit}>
        {["title", "description", "location"].map((field) => (
          <div key={field} style={{ marginBottom: "0.1rem" }}>
            <label>
              {field[0].toUpperCase() + field.slice(1)}:
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                style={{
                  width: "95%",
                  padding: "8px",
                  marginTop: "3px",
                  borderRadius: "4px",
                }}
              />
            </label>
            {errors[field] && <p style={{ color: "red" }}>{errors[field]}</p>}
          </div>
        ))}

        <div style={{ marginBottom: "1rem" }}>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              style={{
                width: "95%",
                padding: "8px",
                marginTop: "3px",
                borderRadius: "4px",
              }}
            />
          </label>
          {errors.date && <p style={{ color: "red" }}>{errors.date}</p>}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>
            Category:
            <select
              name="Category"
              value={formData.category}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "3px",
                borderRadius: "4px",
              }}
            >
              <option value="workshop">Workshop</option>
              <option value="webinar">Webinar</option>
              <option value="meetup">Meetup</option>
            </select>
          </label>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>
            Type:
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "3px",
                borderRadius: "4px",
              }}
            >
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
          </label>
        </div>
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
              padding: "7.2px 12px",
              backgroundColor: "#1d4ed8",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Create Event
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
  backgroundColor: "#1d4ed8",
  padding: "6px 12px",
  borderRadius: "5px",
  textDecoration: "none",
  color: "white",
  margin: "10px",
};

export default CreateEvent;
