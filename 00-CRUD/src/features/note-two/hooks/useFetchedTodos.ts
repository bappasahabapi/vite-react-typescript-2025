import { useEffect, useState } from "react";
import { Todo } from "../types/todo";

export const useNotesTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<string | null>(null);

  const fetchTodos = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }
      const data: Todo[] = await response.json();
      setTodos(data);
    } catch (err) {
      setIsError(`Failed to fetch: ${(err as Error).message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (newTodo: Omit<Todo, "id">) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
      if (!response.ok) {
        throw new Error("Failed to add todo");
      }
      const data: Todo = await response.json();
      setTodos((prev) => [...prev, data]);
    } catch (err) {
      setIsError(`Failed to add todo: ${(err as Error).message}`);
    }
  };

  const updateTodo = async (id: number, updatedTodo: Partial<Todo>) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTodo),
      });
      if (!response.ok) {
        throw new Error("Failed to update todo");
      }
      const data: Todo = await response.json();
      setTodos((prev) => prev.map((todo) => (todo.id === id ? data : todo)));
    } catch (err) {
      setIsError(`Failed to update todo: ${(err as Error).message}`);
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete todo");
      }
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (err) {
      setIsError(`Failed to delete todo: ${(err as Error).message}`);
    }
  };

  return { todos, isLoading, isError, addTodo, updateTodo, deleteTodo };
};
