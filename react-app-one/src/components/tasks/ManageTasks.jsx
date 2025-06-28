import { useState } from "react";
import Addtask from "./Addtask";
import TasksCount from "./TasksCount";
import TasksList from "./TasksList";

function ManageTasks() {
    //state
    let [tasks, setTasks] = useState([]);

    return (
        <div className="container">
            <h1 className="text-center text-primary display-3">Task manager</h1>
            {/* Nest 3 children */}
            <div className="d-flex justify-content-between mt-5">
                <Addtask tasks={tasks} setTasks={setTasks} />
                <TasksList tasks={tasks} />
                <TasksCount tasks={tasks} />
            </div>
        </div>
    )
}

export default ManageTasks;