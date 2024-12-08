import { useState } from "react"

const Counter = () => {

    const [counter, setCounter]=useState(0);

    const handleIncrement =()=>{
        setCounter((preVal)=>(preVal+1))
    };
    const handleDecrement =()=>{
        setCounter((preVal)=>(preVal-1));

    };

  return (
    <div>
        <h1>Counter Component</h1> <hr />
        <div>
            <p>count value is : <b>{counter}</b> </p>
            <button style={{backgroundColor:'lime'}} onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button style={{backgroundColor:'pink'}}  onClick={()=>setCounter(0)}>reset</button>
        </div>
        <div style={{marginTop:"20px"}}>
            <button style={{backgroundColor:'orange'}} onClick={()=>setCounter((preVal)=>preVal+2)}>Increment by 2</button>
            <button onClick={()=>setCounter((preVal)=>preVal-5)}>Decrement by 5</button>
            
        </div>
    </div>
  )
}

export default Counter