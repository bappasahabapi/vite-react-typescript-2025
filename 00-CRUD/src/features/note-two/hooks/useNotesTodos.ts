import { useEffect, useState } from "react";
import { Todo } from "../types/todo";
import axios from "axios";

export const useNotesTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<string | null>(null);

  const fetchTodos = async () => {
    try {
      const response = await axios.get<Todo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      setTodos(response.data);
    } catch (err) {
      setIsError(`Falild to fetch: ${err}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (newTodo: Omit<Todo, "id">) => {
    try {
      const response = await axios.post<Todo>(
        "https://jsonplaceholder.typicode.com/todos",
        newTodo
      );
      setTodos((prev) => [...prev, response.data]);
    } catch (err) {
      setIsError("Failed to add todo");
    }
  };

  const updateTodo = async (id: number, updatedTodo: Partial<Todo>) => {
    try {
      const response = await axios.put<Todo>(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        updatedTodo
      );
      setTodos((prev) =>
        prev.map((todo) => (todo.id === id ? response.data : todo))
      );
    } catch (err) {
      setIsError("Failed to update todo");
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (err) {
      setIsError("Failed to delete todo");
    }
  };

  return { todos, isLoading, isError, addTodo, updateTodo, deleteTodo };
};
