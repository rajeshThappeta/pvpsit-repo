

function TasksList({tasks}) {
  return (
    <div className="text-center">
      <h1>Tasks List</h1>
      {
        tasks.map((t,index)=><p className="fs-3" key={index}>{t}</p>)
      }
    </div>
  )
}

export default TasksList