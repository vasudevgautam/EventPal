import React, { createContext, useContext, useEffect, useState } from "react";

const EventContext = createContext();

export const useEventContext = () => useContext(EventContext);

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [bookmarked, setBookmarked] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    const storedBookmarks =
      JSON.parse(localStorage.getItem("bookmarked")) || [];
    setEvents(storedEvents);
    setBookmarked(storedBookmarks);
  }, []);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
    localStorage.setItem("bookmarked", JSON.stringify(bookmarked));
  }, [events, bookmarked]);

  const addEvent = (event) => setEvents([...events, event]);

  const toggleBookmark = (id) => {
    setBookmarked((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  return (
    <EventContext.Provider
      value={{ events, setEvents, bookmarked, addEvent, toggleBookmark }}
    >
      {children}
    </EventContext.Provider>
  );
};
