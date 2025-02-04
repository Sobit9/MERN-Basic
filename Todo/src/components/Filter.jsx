import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../AppContext";

export default function Filter() {
  const { todos, setFilterTodos } = useContext(AppContext);
  return (
    <div className="mt-3 flex items-center justify-between text-white">
      <h2 className="text-xl font-bold">YOUR TODOS</h2>
      <div className="space-x-3">
        <button
          className="h-10 bg-stone-600 px-3 text-white"
          onClick={() => setFilterTodos(todos)}
        >
          All
        </button>
        <button
          className="h-10 bg-stone-600 px-3 text-white"
          onClick={() =>
            setFilterTodos(todos.filter((todo) => !todo.completed))
          }
        >
          Active
        </button>
      </div>
    </div>
  );
}
