import "./App.css";
import Todo from "./components/Todo";
import Todolist from "./components/Todolist";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);

  const checkTodo = (id) => {
    setTodos(
      todos.map((e) => {
        if (e.id === id) e.isCompleted = !e.isCompleted;
        return e;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((e) => e.id !== id));
  };

  const addTodo = (text) => {
    const newTodo = {
      id: uuid(),
      title: text,
      isComplete: true,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <Todo addTodo={addTodo} />
      <Todolist todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
