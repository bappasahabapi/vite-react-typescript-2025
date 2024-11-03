import { Child, ChildFC } from "./Child";



export const Props = () => {
  return (
    <header>
      <h1>Props Componet</h1>

      {/* <Child title="child - 1" onClick={()=>alert("Clicked")}/> */}
      {/* <ChildFC title="childFC-1" onClick={()=>alert("Clicked FC")}/> */}
      <Child title="child - 1" onClick={() => alert("Clicked")}>
        <p>bangladesh</p>
      </Child>
      <hr />
      <ChildFC title="childFC-1" onClick={() => alert("Clicked FC")}>
        <p>without passing the children props</p>
      </ChildFC>
    </header>
  );
};
