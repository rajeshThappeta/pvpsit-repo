import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router-dom';
import {useContext, useState} from 'react';

import { sampleContext } from "../../contexts/testContext";

function Login() {

  let {a,setA}=useContext(sampleContext)

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let navigate=useNavigate()

  let [userCredErr,setUserCredErr]=useState('')

  async function onUserLogin(userCredentialsObj) {
    let res = await fetch(
      `http://localhost:3000/users?username=${userCredentialsObj.username}&password=${userCredentialsObj.password}`
    );
    let usersArray = await res.json();
   
    if (usersArray.length === 0) {
        //upadte userCredErr state
        setUserCredErr('Username/Password are incorrect')
    }else{
        //navigate to userdashboard component
        navigate('/user-dashboard',{state:usersArray[0]})
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <h2>{a}</h2>
      {/* print user login err */}
      {userCredErr.length!==0&&<p className="fs-3 text-danger text-center">{userCredErr}</p>}
      <form
        className="w-50 mx-auto mt-5 bg-light p-4"
        onSubmit={handleSubmit(onUserLogin)}
      >
        {/* username */}
        <div className="mb-3">
          <input
            type="text"
            {...register("username")}
            className="form-control "
            placeholder="Usename"
          />
        </div>
        {/* password */}
        <div className="mb-3">
          <input
            type="password"
            {...register("password")}
            className="form-control "
          />
        </div>
        {/* submit btn */}
        <button type="submit" className="btn btn-success">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
