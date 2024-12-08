import React from "react"


const Todos:React.FC<{items:string[]}> = (props) => {
  return (
    <div>
        {props.items.map(item=>{
            return(
                <ul key={item}>{item}</ul>
            )
        })}
    </div>
  )

}
export default Todos
