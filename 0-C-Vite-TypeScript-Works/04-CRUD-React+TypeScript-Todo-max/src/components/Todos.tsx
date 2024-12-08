import React from "react";
import { TodoClass } from "../models/todo";
import TodoItem from "./TodoItem";

interface TodosProps {
    items: TodoClass[];
    onRemovedTodo: (id: string) => void;
}

const Todos = ({ items, onRemovedTodo }: TodosProps) => {
    return (
        <ul style={{ padding: '2rem', marginLeft: "1rem" }}>
            {items.map((item) => (
                <TodoItem 
                    key={item.id} 
                    text={item.text} 
                    onRemovedTodo={() => onRemovedTodo(item.id)} // Use an arrow function for clarity
                />
            ))}
        </ul>
    );
};

export default Todos;




export const Todos1: React.FC<{ items: TodoClass[], onRemovedTodo:(id:string)=>void }> = (props) => {
  return (
    <ul style={{padding:'2rem', marginLeft:"1rem"}}>
      {props.items.map((item) => {
        return <TodoItem  key={item.id}  text={item.text} onRemovedTodo={props.onRemovedTodo.bind(null,item.id)} />;
      })}
    </ul>
  );
};

