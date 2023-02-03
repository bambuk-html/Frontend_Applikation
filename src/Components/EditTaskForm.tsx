import { useEffect, useState } from "react";
import { Task } from "./Interfaces";
import React from "react";
import TaskList from "./Tasklist";

export interface IProps {
    taskToEdit: Task
    taskEdited: (editedTask: Task) => void
}
const emptyTask: Task = { "title": "", "completed": false, "id": 0 };

function EditTaskForm(props: IProps) {
    const [formData, setFormData] = useState<Task>(props.taskToEdit ?? emptyTask);

    useEffect(() => setFormData(props.taskToEdit), [props]);

    function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        //name: Name des Formularfelds
        //value: Wert
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value }); //vorherige einträge werden schon eingetragen
    }

    function onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        props.taskEdited(formData);
    }

    return (
        <div className="editTaskForm">
            Props-Title: {props.taskToEdit.title}
            <form onSubmit={onFormSubmit}>
                Bezeichnung: <input type="text" name="title" value={formData.title} onChange={onInputChange} required />
                <button>Save</button>
            </form>
        </div>
    )
}

export default EditTaskForm;

