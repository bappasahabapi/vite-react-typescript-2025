import { useEffect, useState } from "react";

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}


// const url ="https://jsonplaceholder.typicode.com/todos"
const url =`https://jsonplaceholder.typicode.com/todos?_limit=10`

const useTasks =()=>{

    const [data,setData]=useState<Todo[]>([]);
    const [loading,setLoading]=useState<boolean>(true);
    const [error,setError]=useState<string |null>(null);

    useEffect(()=>{

    const fetchTaskData =async ()=>{
        setLoading(true);
        try{
            const response =await fetch(url);
            const json =await response.json();

            setData(json)

        }catch(err){
            setError(`falied to fetch tasks,${err}`)
        }finally{
            setLoading(false)
        }
    };

    fetchTaskData()

    },[])

    return {data,loading,error};
}

export default useTasks;