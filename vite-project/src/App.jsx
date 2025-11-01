import React, { useState } from 'react'

export default function App() {

  const [task, settask] =useState(
    [{text: "Walk the Dog", completed:false},
      {text: "Feed the cat", completed:false}, 
      {text: "Go for a run", completed: false},
    ]);

  const [newTask, setnewTask] = useState("");

  const handleClick =(e) => {
    e.preventDefault();
    if(newTask.trim()==="") return;
    settask([...task, {text: newTask, completed: false}]);
    setnewTask("");
  }
  const handleCheckbox = (index) => {
    const updatedTask = task.map((tasks, i) => 
      i === index ?{...tasks, completed: ! tasks.completed}: tasks);
    settask(updatedTask);
  }

  return (
    <div>      
      <form onSubmit={handleClick}>
        <input 
        type='text'
        value={newTask}
        onChange={(e) => setnewTask(e.target.value)}
        placeholder='Enter a New Task'/>
        <button >Add Task</button>

        <ul>
            {(task.map((tasks,i) =>  
            <li key={i}>
              
              <input type='checkbox'
              value={task}
              checked= {task.completed}
              onChange={() => handleCheckbox(i)}
              />
              
              <span style={{
              textDecoration: tasks.completed ? "line-through" : "none"
            }}>
              {tasks.text}
            </span>
            </li>))}
        </ul>
      </form>
    </div>
  )
}
