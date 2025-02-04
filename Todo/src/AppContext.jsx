import React, { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [filterTodos, setFilterTodos] = useState(todos);

  useEffect(() => {
    // localStorage.setItem("todos", JSON.stringify(todos));
    setFilterTodos(todos);
  }, [todos]);

  return (
    <AppContext.Provider
      value={{ todos, setTodos, filterTodos, setFilterTodos }}
    >
      {children}
    </AppContext.Provider>
  );
};
