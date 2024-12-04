import React, { useState } from "react";

interface Todo {
  id: number;
  title: string;
}
const defalutTodos = [
  {
    id: 123456789,
    title: "This is default todo one",
  },
  {
    id: 1234566577855,
    title: "This is default todo two",
  },
];

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>(defalutTodos);
  const [title, setTitle] = useState<string>("");
  const [editId, setEditId] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (editId !== null) {
      //update the todo
      const newTodo = todos.map((todo) =>
        todo.id === editId ? { ...todo, title } : todo
      );  // returns new array

      setTodos(newTodo);
      setEditId(null);
    } else {
      const newTodo: Todo = {
        id: Date.now(),
        title: title,
      };
      setTodos([...todos, newTodo]);
      setTitle("");
    }
  };

  const handleEdit = (todo: Todo) => {
    setTitle(todo.title);
    setEditId(todo.id);
  };


  const handleDelete =(todoId:number)=>{
    const deletedTodo =todos.filter(todo=>todo.id !==todoId); //return new array
    setTodos(deletedTodo)

  };

  return (
    <div>
      <h1>
        Basic Todos using <small>useState() hook </small>
      </h1>
      <div>
        <h2>Todo List</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            placeholder="enter any text for title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          {/* <button type="submit">Add Todo</button> */}
          <button type="submit">{editId !== null ? "Update" : "Add"}</button>
        </form>
      </div>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.title}{" "}
              <button onClick={() => handleEdit(todo)}>Edit</button>
              <button onClick={()=>handleDelete(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
