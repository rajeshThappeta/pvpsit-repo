import { useState } from 'react'
import { useForm } from 'react-hook-form'

function Addtask({tasks,setTasks}) {

 
  let { register, handleSubmit } = useForm()

  //function to add new task
  function addNewTask(taskObj) {
    setTasks([...tasks, taskObj.newTask])
  }

  console.log(tasks)

  return (
    <div>
      <h1>Add task</h1>
      <form className="w-75 text-center" onSubmit={handleSubmit(addNewTask)}>
        <input type="text" {...register("newTask")} className="form-control mt-4" placeholder='add task...' />
        <button className="btn btn-success mt-4">Add</button>
      </form>
    </div>
  )
}

export default Addtask