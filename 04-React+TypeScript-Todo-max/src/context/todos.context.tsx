import React, { ReactNode, useState } from "react";
import { TodoClass } from "../models/todo";

const TodosContext = React.createContext<{
  items: TodoClass[];
  addTodo: () => void;
  removeTodo: (id: string) => void;
}>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

// const TodosProvider: React.FC<{children:ReactNode}> = (props) => {

//     const []=useState

//   return <TodosContext.Provider value={}>{props.children}</TodosContext.Provider>;
// };
