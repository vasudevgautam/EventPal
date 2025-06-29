import { useParams, Link } from "react-router-dom";
import { useEventContext } from "../context/EventContext";
import {  motion } from "framer-motion";
const EventDetail = () => {
  const { id } = useParams();
  const { events } = useEventContext();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return <p>❌ Event Not Found</p>;
  }

  return (
    <div style={{ padding: "1rem", margin: "1rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "1rem",
        }}
      >
        {" "}
        <Link to="/" style={backBtnStyle}>
          ← Back To Home
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        style={{
          padding: "1rem",
          borderRadius: "8px",
          border: "1px solid #ddd",
          margin: "1rem",
          background: "rgba(114, 248, 252,0.4)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          maxWidth: "90%",
        }}
      >
        <h2>Welcome To The :- {event.title} </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, ex
          explicabo delectus vel sint, neque quis eos distinctio id obcaecati
          blanditiis nobis praesentium iusto? Libero sint omnis, doloribus,
          facere quo neque veniam eveniet, ipsum unde labore debitis sunt at
          voluptas.
        </p>
      </motion.div>
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
export default EventDetail;
