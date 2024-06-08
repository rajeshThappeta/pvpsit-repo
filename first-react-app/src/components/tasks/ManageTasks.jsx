import React, { useState } from "react";
import AddTask from "./AddTask";
import TasksList from "./TasksList";
import TasksCount from "./TasksCount";

function ManageTasks() {
  let [tasks, setTasks] = useState([]);

  return (
    <div className="text-center">
      <h2>Task Manager</h2>
      <div className="row mt-5">
        <div className="col-sm-4">
          <AddTask data={{ tasks, setTasks }} />
        </div>
        <div className="col-sm-4">
          <TasksList tasks={tasks} />
        </div>
        <div className="col-sm-4">
          <TasksCount tasks={tasks} />
        </div>
      </div>
    </div>
  );
}

export default ManageTasks;
