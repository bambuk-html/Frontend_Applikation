import React, { useEffect, useState } from 'react';
import './App.css';
import { Task } from "./Components/Interfaces"
import axios from "axios";
import TaskList from "./Components/Tasklist";
import EditTaskForm from './Components/EditTaskForm';



const emptyTask: Task = { "title": "", "completed": false, "id": 0 }

function App() {
  useEffect(() => {
    loadData();
  }, []);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskToEdit, setTaskToEdit] = useState<Task>(emptyTask);

  function loadData() {
    axios.get<Task[]>("http://localhost:3000/tasks").then((response) => {
      setTasks(response.data);
    });
  }


  function deleteTask(taskToDelete: Task) {
    axios.delete("http://localhost:3000/task/" + taskToDelete.id).then(() => {
      loadData();
    });
  }

  function editTask(task: Task) {
    setTaskToEdit(task);
  }

  function taskEdited(task: Task) {
    axios.put<Task>("http://localhost:3000/tasks", task).then(response => {
      loadData();
    });
  }

  function addTask(task: Task) {
    axios.post<Task>("http://localhost:3000/tasks", task).then(response => {
      loadData();
    });
  }

  
  return (
    <div className="App">
      <h1>Add Tasks:</h1>
      <EditTaskForm taskToEdit={emptyTask} taskEdited={addTask} />
      <h1>Edit Tasks:</h1>
      <EditTaskForm taskToEdit={taskToEdit} taskEdited={taskEdited} />
      <h1>Tasks:</h1>
      <TaskList tasks={tasks} deleteTask={deleteTask} taskToEdit={editTask} />
    </div>
  );
}

export default App;
