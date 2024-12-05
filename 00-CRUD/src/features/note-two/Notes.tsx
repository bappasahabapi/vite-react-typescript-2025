import useTasks from "./hooks/useTasks";

const Notes = () => {
    const { data: tasksData, loading, error } = useTasks();

    // Ensure tasksData is defined before filtering or mapping
    if (tasksData) {
        const incompleteTasks = tasksData.filter(task => !task.completed);
        // console.log("Incomplete Tasks:", incompleteTasks);
    }

    if (loading) return <p>Loading tasks...</p>;
    if (error) return <p>Error loading tasks: {error}</p>;

    return (
        <div>
            <h1>Notes Component using <small>jsonPlaceholder</small></h1>
            <div>
                <h3>Tasks</h3>
                {tasksData?.map(task => (
                    <div key={task.id} style={{padding:'10px'}}>
                        <b>{task.id}</b> {" "}
                        <span style={{color:'orange'}}>{task.completed ? " Completed " : "Incomplete"} {" "}</span>
                        <span>{" "}{task.title}</span>
                        <button style={{marginLeft:"20px",marginRight:"10px"}}>Edit</button>
                        <button>Delete</button>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notes;
