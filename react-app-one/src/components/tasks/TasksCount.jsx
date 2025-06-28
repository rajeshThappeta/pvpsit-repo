

function TasksCount({tasks}) {
    return (
        <div className="text-center">
            <h1>Tasks Count</h1>
            <p className="fs-1">{tasks.length}</p>
        </div>
    )
}

export default TasksCount