import EditTaskForm from "./EditTaskForm";
import { Task } from "./Interfaces";

export interface IProps {
    tasks: Task[];
    deleteTask: (task: Task) => void;
    taskToEdit: (task: Task) => void;

}

function TaskList(props: IProps) {
    return (
        <div className="taskList">
            <ul>
                {props.tasks.map((todo: Task) => (
                    <li key={todo.id}>{todo.title} <button onClick={() => props.deleteTask(todo)}>Delete</button> <button onClick={() => props.taskToEdit(todo)}>Edit</button></li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;