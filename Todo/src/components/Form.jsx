import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import AddIcon from "./icon/AddIcon";
import { AppContext } from "../AppContext";

export default function Form() {
  const { todos, setTodos } = useContext(AppContext);
  const [input, setInput] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const id = todos.length ? todos[0].id + 1 : 1;
    const newTodo = {
      id: id,
      title: input,
      completed: false,
    };
    console.log(newTodo);
    setTodos([newTodo, ...todos]);
    setInput("");
  };
  return (
    <form
      onSubmit={onSubmit}
      className="flex item-center rounded border border-grey-600 bg-stone-950 text-white"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your Todo list."
        className="h-10 flex-1 border-0 bg-transparent px-2 outline-none"
      />
      <button type="submit" className="h-10 px-2">
        <AddIcon className="h-6 w-6" />
      </button>
    </form>
  );
}

Form.propTypes = {
  todos: PropTypes.array,
  setTodos: PropTypes.func,
};
