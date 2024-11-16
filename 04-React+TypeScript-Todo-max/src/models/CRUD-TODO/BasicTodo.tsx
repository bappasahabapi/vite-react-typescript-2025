import React, { useState } from 'react';

// Define the type for a Todo
interface Todo {
  id: number;
  title: string;
}

const defaultTodos=[{
    id:123456789,
    title:"Bappa Saha Bapi"
},
{
    id:12345678900,
    title:"Partho Saha Bapi"
}]

const BasicTodo= () => {

  const [todos, setTodos] = useState<Todo[]>(defaultTodos);
  const [title, setTitle] = useState<string>('');
  const [editId, setEditId] = useState<number | null>(null);

  // Function to add or update a todo
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editId !== null) {
      // Update existing todo
      setTodos(todos.map(todo => (todo.id === editId ? { ...todo, title } : todo)));
      setEditId(null);
    } else {
      // Add new todo
      const newTodo: Todo = { id: Date.now(), title };
      setTodos([...todos, newTodo]);
    }
    setTitle('');
  };

  // Function to delete a todo
  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Function to edit a todo
  const handleEdit = (todo: Todo) => {
    setTitle(todo.title);
    setEditId(todo.id);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter todo title"
          required
        />
        <button type="submit">{editId !== null ? 'Update' : 'Add'}</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
          {todo.title} {" "}
            <button style={{padding:'5px 20px',margin:'10px'}} onClick={() => handleEdit(todo)}>Edit</button>
            <button style={{padding:'5px 20px'}} onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BasicTodo;