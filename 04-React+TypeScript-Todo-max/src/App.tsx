import { TodoClass } from "./models/todo";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import { useState } from "react";
import BasicTodo from "./models/CRUD-TODO/BasicTodo";
import TicketBooking from "./InterviewQuestion/TicketBooking";
import BasicTodoOne from "./models/CRUD-TODO/BasicTodoOne";
import MainPage from "./TicketBookingQuestion/MainPage";

function App() {
  const defaultTodos = [
    new TodoClass("learn React"),
    new TodoClass("ok React"),
   ];

   const [todos, setTodos]=useState<TodoClass[]>(defaultTodos)

   const addTodoHandler=(value:string)=>{
    console.log(value)
    const newTodo =new TodoClass(value);

    setTodos((preval)=> preval.concat(newTodo))
    // setTodos((prevTodos) => [
    //   ...prevTodos,
    //   newTodo
  // ]);
   };


   const handleDeleteTodo =(todoId:string)=>{
    console.log(todoId)
    setTodos(preTodos=>{
      return preTodos.filter(todo=>todo.id !==todoId)
    })
   };

  return (
    <>
    {/* <MainPage/> */}
    <hr />
    <TicketBooking/>

   
    <h1>App Component</h1>
    <div
      style={{ marginTop: "2rem", flexDirection:'column' }}
    >
      <NewTodo onAddTodo={addTodoHandler}/>  <br />
      <Todos items={todos} onRemovedTodo={handleDeleteTodo} />
    </div>
    <hr />
    <div>
      <h1>Todo CRUD using use State</h1>
      <BasicTodo/> <hr />
      <BasicTodoOne/>

    </div>
    </>
  );
}

export default App;
