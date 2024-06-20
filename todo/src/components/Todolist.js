import React from "react";
import Todoo from "./Todoo";

const Todolist = ({ todos, checkTodo, deleteTodo }) => {
  return (
    <div>
      {todos.map((e, i) => (
        <Todoo
          key={e.id}
          title={e.title}
          checkTodo={checkTodo}
          id={e.id}
          isCompleted={e.isCompleted}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default Todolist;
