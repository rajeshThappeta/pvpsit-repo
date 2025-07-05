
import { useForm } from 'react-hook-form'

function AddUser() {

  const { register, handleSubmit } = useForm();


  async function addNewUser(userObj) {
    console.log(userObj)
    //Make HTTP POST req to save new user in backend
    let res=await fetch('http://localhost:3000/users',
      {
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
          'Content-type':"application/json"
        }
      }
    )

    console.log("res is ",res)
  }

  return (
    <div>
      <h2 className="display-3 text-center text-warning">Add New User</h2>
      <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit(addNewUser)}>
        <input type="text" {...register("name")} id="" className="form-control mb-3" placeholder='Name of user' />
        <input type="email" {...register("email")} id="" className="form-control mb-3" placeholder='Email of user' />
        <input type="date" {...register("dob")} id="" className="form-control mb-3" />
        <button className="btn btn-secondary float-end">Create User</button>
      </form>

    </div>
  )
}

export default AddUser