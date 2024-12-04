import Counter from "./features/couter/Counter";
import Todos from "./features/todo-one/Todos";
function App() {
  return (
    <>
      <div
        style={{
          margin: "auto",
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
          border: "1px solid black",
          backgroundColor:'lightGray'
        }}
      >
        <div>
          <Counter />
        </div>
      </div>
      <div
        style={{
          margin: "auto",
          marginTop:"20px",
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
          border: "1px solid black",
          backgroundColor:''
        }}
      >
        <Todos />
      </div>
    </>
  );
}

export default App;
