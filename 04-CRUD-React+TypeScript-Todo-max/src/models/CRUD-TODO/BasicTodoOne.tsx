import React, { useState } from "react";

interface TodoOne {
  id: number;
  title: string;
}

const defaultTodos = [
  { id: 11111, title: "test one" },
  { id: 2222, title: "test two" },
];
const BasicTodoOne = () => {
  const [todos, setTodos] = useState<TodoOne[]>(defaultTodos);
  const [title, setTitle] = useState<string>("");
  const [editedTodoId, setEditedTodoId] = useState<number | null>(null);

 

  const addTodo =(title:string)=>{
    const newTodo: TodoOne = {
        id: Date.now(),
        title: title,
      };
      // console.log(newTodo)
      setTodos([...todos, newTodo]);
      setTitle("");
  }

  const updateTodo =(id:number, title:string)=>{
    const newTodos =todos.map(todo=>{
        if(todo.id ===id){
            return {
                ...todo,
                title:title
            }
        }else{
            return todo;
        }

    })
    setTodos(newTodos)
    setEditedTodoId(null);

}

  const handleEdit = (todo: TodoOne) => {
    console.log(todo);
    setTitle(todo.title);
    setEditedTodoId(todo.id);
  };



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(editedTodoId !==null){
        updateTodo(editedTodoId,title)
    }else{
        addTodo(title)
    }

    setTitle('')

  };

  const handleDelete = (id: number) => {
    const deletedTodo = todos.filter((todo) => todo.id !== id);
    setTodos(deletedTodo);
  };

 

  return (
    <div>
      <h4>Basic Todo One</h4>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="text">Adding todo {" "}</label> */}
        <input
          type="text"
          placeholder="enter any text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit"> {editedTodoId ? "Update" : "Add"}</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}{" "}
            <button
              style={{ padding: "5px 20px", margin: "10px" }}
              onClick={() => handleEdit(todo)}
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(todo.id)}
              style={{ padding: "5px 20px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BasicTodoOne;
