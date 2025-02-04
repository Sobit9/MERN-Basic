import { CheckIcon, TrashIcon } from "lucide-react";
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../AppContext";

export default function Todo({ todo }) {
  const { setTodos } = useContext(AppContext);
  return (
    <div className="item-center flex h-12 justify-between rounded border-grey-600 px-2 text-white">
      <div className="flex gap-3">
        <input
          type="checkbox"
          id={`todo-${todo.id}`}
          onChange={(e) => {
            setTodos((prev) =>
              prev.map((t) => {
                if (t.id === todo.id) {
                  t.completed = e.target.checked;
                }
                return t;
              })
            );
          }}
          className="peer hidden"
          defaultChecked={todo.completed}
        />
        <label
          htmlFor={`todo-${todo.id}`}
          className="h-6 w-6 items-center justify-center border peer-checked:[&>.checkicon]:flex"
        >
          <CheckIcon className="checkicon hidden h-4 w-4" />
        </label>
        <span className={todo.completed ? "line-through" : ""}>
          {todo.title}
        </span>
      </div>
      <div>
        <button
          onClick={() => {
            setTodos((prev) => {
              const newTodoState = prev.filter((t) => t.id !== todo.id);
              return newTodoState;
            });
          }}
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  );
}

Todo.propTypes = {
  todo: PropTypes.object,
  setTodos: PropTypes.func,
};
