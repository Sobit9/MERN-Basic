import React, { useContext } from "react";
import Todo from "./Todo";
import { AppContext } from "../AppContext";

export default function TodoList() {
  const { filterTodos } = useContext(AppContext);
  return (
    <div className="h-[calc(100vh-200px)] overflow-y-auto">
      {filterTodos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
