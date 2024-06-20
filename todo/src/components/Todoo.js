import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import { Check, Delete } from "@mui/icons-material";

const Todoo = ({ title, checkTodo, id, isCompleted, deleteTodo }) => {
  const markComplete = () => checkTodo(id);
  const delTodo = () => deleteTodo(id);
  const todoStyle = isCompleted ? { textDecoration: "line-through" } : {};
  return (
    <div>
      <Container maxWidth="sm">
        <Card variant="outlined" sx={{ mt: 2, backgroundColor: "lightgray" }}>
          <CardContent>
            <Typography variant="h6" component="h2" style={todoStyle}>
              <IconButton onClick={markComplete}>
                <Check sx={{ color: "green" }} />
              </IconButton>
              {title}
              <IconButton sx={{ float: "right" }} onClick={delTodo}>
                <Delete sx={{ color: "red" }} />
              </IconButton>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Todoo;
