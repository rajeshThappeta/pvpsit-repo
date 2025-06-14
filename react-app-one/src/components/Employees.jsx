

function Employees(props) { //{ e: {}}
    console.log(props)
    //state

    return (
        <div className="card w-25 text-center">
            {/* name of emp */}
            <img src={props.e.image} width="100%" alt="" />
           <h3>{props.e.empId}</h3>
            <div className="card-body">
                {/* img of emp */}
                <p className="fs-1">{props.e.name}</p>
                {/* button */}
                <button className="btn btn-success">Profile</button>
            </div>
        </div>
    )
}

export default Employees;