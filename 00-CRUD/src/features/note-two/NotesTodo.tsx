import { useState } from "react";
import { useNotesTodos } from "./hooks/useNotesTodos";
import { Todo } from "./types/todo";


// interface TodoListProps {
//     // todos: Todo[];
//     onEdit: (todo: Todo) => void;
//     onDelete: (id: number) => void;
// }


const NotesTodo: React.FC = () => {
    const { todos, isLoading, isError, addTodo, updateTodo, deleteTodo } = useNotesTodos();
    const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
    const [title, setTitle] = useState<string>("");

    const handleAddOrUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;

        if (editingTodo) {
            updateTodo(editingTodo.id, { title, completed: editingTodo.completed });
            setEditingTodo(null);
        } else {
            addTodo({ title, completed: false });
        }
        setTitle("");
    };

    const handleEdit = (todo: Todo) => {
        setEditingTodo(todo);
        setTitle(todo.title);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Todo App</h1>
            {isLoading && <p>Loading...</p>}
            {isError && <p style={{ color: "red" }}>{isError}</p>}

            <form onSubmit={handleAddOrUpdate}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter todo"
                />
                <button type="submit">{editingTodo ? "Update" : "Add"}</button>
            </form>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ margin: "10px 0" }}>
                        <span>{todo.title}</span>
                        <button onClick={() => handleEdit(todo)} style={{ marginLeft: "10px" }}>
                            Edit
                        </button>
                        <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: "5px" }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotesTodo;


// const NotesTodo = ({onEdit,onDelete}:TodoListProps) => {
//     const { todos, loading, error, addTodo, updateTodo, deleteTodo } = useTodos();
//     const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
//     const [title, setTitle] = useState<string>("");

//     if (isLoading) return <p>Loading todos...</p>;
//     if (isError) return <p>{isError}</p>;

//     console.log("Fetched Todos:", todosData);

//     return (
//         <div>
//             <h1>NotesTodo</h1>
//             {todosData.map((todo) => (
//                 <div key={todo.id} style={{border:'1px solid blue',margin:'5px'}}>
//                     <b>{todo.completed ? "Completed" : "Incomplete"}</b>
//                     <p>{todo.title}</p>
//                     <button onClick={()=>onEdit(todo)}>Edit</button>
//                     <button onClick={()=>onDelete(todo.id)}>Delete</button>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default NotesTodo;
