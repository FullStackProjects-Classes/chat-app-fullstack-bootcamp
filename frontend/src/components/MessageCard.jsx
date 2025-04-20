import { Card, CardContent, Typography, Button } from "@mui/material";

const MessageCard = ({ msg, onDelete }) => {
  return (
    <Card style={{ marginBottom: "10px" }}>
      <CardContent>
        <Typography variant="h6">{msg.name}</Typography>
        <Typography variant="body1">{msg.message}</Typography>
        <Button
          size="small"
          color="error"
          onClick={() => onDelete(msg.id)}
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default MessageCard;
