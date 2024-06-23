import './App.css';
import { useState } from 'react';
import { Task } from './Task';

function App() {

  const [todoList, setTodoList] = new useState([]);
  const [newTask, setNewTask] = new useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    if(newTask.trim() !== ""){
      const task = {
        id : todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        name : newTask,
        completed: false
      }
      const newTodoList = [...todoList, task];
      document.getElementById("listInput").value = ("");
      setTodoList(newTodoList);
      setNewTask('');
    }
  }

  const removeTask = (id) => {
    setTodoList(todoList.filter((list) => list.id !== id));
  }

  const completeTask = (id) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((list) =>
        list.id === id ? { ...list, completed: true } : list
      )
    );
  };

  const updateTask = (id, newName) => {
    setTodoList((prevTodoList) => 
      prevTodoList.map((list)=> 
        list.id === id ? { ...list, name: newName } : list
      )
    );
  }
  
  return (
    <div className="App">
      <div id='inputHeader'>
        <h2>To Do List</h2>
        <div>
          <input id='listInput' onChange={handleChange}/>
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
      <div id='listContainer'>
        { todoList.map((list) => (
          <Task
            key={list.id}
            id={list.id} 
            name={list.name}
            completed={list.completed} 
            removeTask={removeTask}
            completeTask={completeTask}
            updateTask={updateTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
