import React, { useRef } from "react";


const NewTodo:React.FC<{onAddTodo:(text:string)=>void}> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
    //   throw new Error("Length of entered text is zero");
      return;
    }
    props.onAddTodo(enteredText)
  };

  return (
    <form onSubmit={handleSubmit} style={{margin:"2rem"}}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
