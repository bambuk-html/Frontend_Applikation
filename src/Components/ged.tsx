import { useEffect, useState } from "react";
import axios from "axios";
import { Task } from "./Interfaces"

export default function ged() {
    const [tasks, setTasks] = useState<[] | Task[]>([]);

        useEffect(() => {
            axios.get<Task[]>("http://localhost:3000/tasks").then((response) => {
                setTasks(response.data);
            });
        }, []);

    return (
        <div className="App">
            <ul>
                {tasks.map((todo: Task) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}