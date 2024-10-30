interface TodoProps {
  text: string;
  onRemovedTodo: () => void;
}

const TodoItem = ({ text, onRemovedTodo }: TodoProps) => {
  return (
    <div>
      <li style={{ padding: "5px" }} onClick={onRemovedTodo}>
        {text}
      </li>
    </div>
  );
};

export default TodoItem;

// const Todo: React.FC<{ text: string; onRemovedTodo: () => void }> = (props) => {
//   return (
//     <div>
//       <li onClick={props.onRemovedTodo}> {props.text}</li>
//     </div>
//   );
// };

// export default Todo;
