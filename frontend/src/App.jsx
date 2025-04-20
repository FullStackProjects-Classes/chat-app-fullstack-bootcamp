import { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";
import MessageCard from "./components/MessageCard";

const BACKEND_URL = import.meta.env.VITE_API_URL;

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(`${BACKEND_URL}/messages`)
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  const handleSubmit = async () => {
    if (!name || !message) return alert("Name and message are required!");

    const res = await fetch(`${BACKEND_URL}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, message }),
    });

    const newMsg = await res.json();
    setMessages((prev) => [...prev, newMsg]);
    setMessage("");
  };

  const handleDelete = async (id) => {
    await fetch(`${BACKEND_URL}/messages/${id}`, { method: "DELETE" });
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Chat Wall
        </Typography>

        <TextField
          fullWidth
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          margin="normal"
        />
        <Button variant="contained" onClick={handleSubmit}>
          Send
        </Button>
      </Box>

      {messages.map((msg) => (
        <MessageCard key={msg.id} msg={msg} onDelete={handleDelete} />
      ))}
    </Container>
  );
}

export default App;
