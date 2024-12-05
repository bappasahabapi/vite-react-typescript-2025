import Counter from "./features/couter/Counter";
import Notes from "./features/note-two/Notes";
import NotesTodo from "./features/note-two/NotesTodo";
import Todos from "./features/todo-one/Todos";
function App() {
  return (
    <>
      <div style={{display:'flex',justifyContent:'flex-start',alignItems:"center"}}>
      <div
          style={{
            margin: "auto",
            marginTop: "20px",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            border: "1px solid black",
            backgroundColor: "",
          }}
        >
          <Notes />
          <NotesTodo />
        </div>
        <div
          style={{
            // margin: "auto",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid black",
            backgroundColor: "lightGray",
          }}
        >
            <Counter />
          
        </div>
        <div
          style={{
            margin: "auto",
            marginTop: "20px",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            border: "1px solid black",
            backgroundColor: "",
          }}
        >
          <Todos />
        </div>
        
      </div>
    </>
  );
}

export default App;
