import React, { useState } from "react";
import {
  FormControl,
  TextField,
  Button,
  Container,  
  Typography,
} from "@mui/material";

const Todo = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <Container maxWidth="sm">
      <Typography
        variant="h5"
        style={{ textAlign: "center", margin: "15px 15px" }}
      >
        <strong>ToDo List</strong>
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth={true}>
          <TextField
            label="Add a Todo"
            required={true}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 3 }}
          >
            Contained
          </Button>
        </FormControl>
      </form>
    </Container>
  );
};

export default Todo;
