import { useForm } from "react-hook-form";

function AddTask(props) {

  let { tasks, setTasks } = props.data;
  let { register, handleSubmit } = useForm();

  function addNewTask(taskObj) {
    setTasks([...tasks, taskObj.newtask]);
  }

  return (
    <div>
      <h2 className="text-info">Add New Task</h2>
      <form className="py-3" onSubmit={handleSubmit(addNewTask)}>
        <input
          type="text"
          {...register("newtask")}
          className="form-control"
          placeholder="New task"
        />
        <button type="submit" className="btn btn-success mt-2">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTask;
