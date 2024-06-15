import "./Login.css";
import { useForm } from "react-hook-form";
import {useContext} from 'react';
import { userLoginContext } from "../../contexts/userLoginContext";

function Login() {

  let { setUserLoginStatus, loginUser}=useContext(userLoginContext)
  const [userLoginErr, setUserLoginErr] = useState('')

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  //on user submit
  async function onUserLogin(userCred) {
   
    loginUser(userCred)
  }

  
  return (
    <div>
      <p className="display-3 text-center">User Login</p>
      {/* registration form */}
      <div className="row ">
        <div className="col-11 col-sm-10 col-md-6 mx-auto">
          {/* other error message */}
          {setUserLoginStatus===false &&userLoginErr.length!==0&& (
            <p className="fs-2 text-danger text-center">{err}</p>
          )}
          <form
            className="mx-auto mt-5 bg-light p-3"
            onSubmit={handleSubmit(onUserLogin)}
          >
            {/* username */}
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="form-control"
                {...register("username", { required: true })}
              />
              {/* validation error message on username */}
              {errors.username?.type === "required" && (
                <p className="text-danger lead">*Username is required</p>
              )}
            </div>
            {/* password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                {...register("password", { required: true })}
              />
              {/* validation error message on password */}
              {errors.password?.type === "required" && (
                <p className="text-danger lead">*Password is required</p>
              )}
            </div>

            {/* submit button */}
            <button className="btn btn-success" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
