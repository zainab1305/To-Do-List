import {useState} from "react"
import TaskList from "./TaskList"
export default function Toda()
{
    const [tasks,setTasks]=useState([])
    
    function sub(formData)
    {
        const newTask=formData.get("task")
        setTasks(task => {
            return [...task,{
            name:newTask,
            done:false,
        id:Date.now()}];
        })
   
    }
    function checkStatus(key)
    {
        setTasks(task =>  {
            return task.map(task => (task.id === key ? { ...task, done: !task.done } : task
            ))})
    }
    function remove(key)
    {
        setTasks(task => task.filter(t => t.id !==key));
    }
    return (
        <>
        <header><h1>To Do List App</h1></header>
        <form action={sub}>
        <input type="text"
            placeholder="add task"
            name="task">
        </input>
        <button>Add</button>
        </form>
        {tasks && <TaskList todo={tasks} status={checkStatus} delstat={remove}/>}
        </>
        
    )
}