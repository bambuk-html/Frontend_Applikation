import React, { useEffect, useState } from 'react';
import './App.css';
//import GET from "./Components/GET";
import {Task} from "./Components/Interfaces"
import axios from "axios";
import TaskList from './Components/Tasklist';
import EditTaskForm from './Components/EditTaskForm';


const emptyTask : Task = {"title": "", "completed": false, "id" : 0}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskToEdit, setTaskToEdit] = useState<Task>(emptyTask);
    useEffect(() => {
      loadData();
    }, []);

    function loadData () {
      axios.get <Task[]>("http://localhost:3000/tasks").then((response) => {
        setTasks(response.data);
      });
    }
  
  function deleteTask(taskToDelete: Task) {
    axios.delete("http://localhost:3000/task" + taskToDelete.id).then(() => {
      loadData();
    });
  }

  function editTask(taskToEdit)

return(
  <div className="App">
    <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask}/>
    <EditTaskForm taskToEdit={taskToEdit} taskEdited={onTaskEdited}/>
  </div>
);
}

export default App;
