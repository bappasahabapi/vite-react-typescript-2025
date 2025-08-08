import useFetchTodo from "../hooks/useFetchTodo"


const TodoMainPage = () => {

    const {data} =useFetchTodo("https://jsonplaceholder.typicode.com/todos?_limit=3")
    console.log(data)
  return (
    <div>
        <h1>Todo</h1>
        {
            data.map(todo=>(
                <li key={todo.id}>{todo.title}</li>
            ))
        }
    </div>
  )
}

export default TodoMainPage