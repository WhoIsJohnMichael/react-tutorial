import { useState } from "react"

export const Task = (props) => {

  const [taskName, setTaskName] = useState(props.name);
  const handleUpdate = (id) => {
    let newTaskName = document.getElementById(`task-name-${id}`).value;
    props.updateTask(props.id, newTaskName);
  }

  return (
    <div className="task">
      <input id={`task-name-${props.id}`} className='input-task' onChange={(e)=> {setTaskName(e.target.value)}} value={taskName} style={props.completed ? {color: 'green', fontWeight: 'bold'} : {color: 'black'}}/>
      <button className='delete-btn' onClick={() => props.removeTask(props.id)}>Delete</button>
      <button className='update-btn' onClick={() => handleUpdate(props.id)} disabled={props.completed? true : false}>Update</button>
      <button className='complete-btn' onClick={() => props.completeTask(props.id)} disabled={props.completed? true : false}>Complete</button>
    </div>
  )
}