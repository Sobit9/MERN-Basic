import React, { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Filter from "./components/Filter";
// import Todo from "./components/Todo";
// import { useLocalStorage } from "usehooks-ts";
import { AppContext, AppProvider } from "./AppContext";
import TodoList from "./components/TodoList";

export default function App() {
  const { filterTodos } = useContext(AppContext);
  // const [appState, setappState] = useState();
  // const [todos, setTodos] = useLocalStorage("todos", []);
  //  useState(() => {
  //   const todosFromLocalStorage = localStorage.getItem("todos");
  //   if (todosFromLocalStorage) {
  //     return JSON.parse(todosFromLocalStorage);
  //   }
  //   return [];
  // });
  // const [filterTodos, setFilterTodos] = useState(todos);

  // useEffect(() => {
  //   const todosFromLocalStorage = localStorage.getItem("todos");
  //   if (todosFromLocalStorage) {
  //     return JSON.parse(todosFromLocalStorage);
  //   }
  //   return [];
  // });

  return (
    <AppProvider>
      <div className="min-h-screen w-full bg-stone-900">
        <div className="mx-auto min-h-screen max-w-md bg-stone-950">
          <Header />
          <main className="bg-stone-950 p-5">
            <Form />
            <Filter />
            <TodoList />
          </main>
          <div></div>
        </div>
      </div>
    </AppProvider>
  );
}
