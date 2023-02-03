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
                    <li className="selected" key={todo.id}>{todo.title} <button className="delete" onClick={() => props.deleteTask(todo)}>löschen</button> <button className="edit" onClick={() => props.taskToEdit(todo)}>bearbeiten</button></li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;