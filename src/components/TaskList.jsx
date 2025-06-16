function TaskList(props)
{
    const AllTasks=props.todo.map(task => <div key={task.name} className="task" ><button onClick={() =>props.status(task.id)}
    style={{backgroundColor:task.done? "green" :"white"}}></button><p style={{textDecoration: task.done? "line-through" : "none"}}>{task.name}</p>
    <button onClick={() => props.delstat(task.id)}>X</button></div>)
    
    return (
        <>
        <section>
        <h1>Task List</h1>
        
            {AllTasks}
        </section>
        </>
    )
}
export default TaskList