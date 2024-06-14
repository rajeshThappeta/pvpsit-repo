import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Register() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();

  //form submission
  async function handleFormSubmit(userObj) {
    //make HTTP POST req to create new user API
    let res = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(userObj),
    });

    //if user created succeesfully
    if (res.status === 201) {
      navigate("/login");
    }
  }

  return (
    <div>
      <h1 className="text-center text-info display-3">Register</h1>

      <form
        className="w-50 mx-auto mt-5"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        {/* username */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            {...register("username", {
              required: true,
              minLength: 4,
              maxLength: 6,
            })}
            id="username"
            className="form-control"
          />
          {/* validation error message of username */}
          {errors.username?.type === "required" && (
            <p className="text-danger">Username is required</p>
          )}
          {errors.username?.type === "minLength" && (
            <p className="text-danger">Min length should be 4</p>
          )}
          {errors.username?.type === "maxLength" && (
            <p className="text-danger">Max length should be 6</p>
          )}
        </div>
        {/* password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            {...register("password", { required: true })}
            id="password"
            className="form-control"
          />
          {/* validation error message of password */}
          {errors.password?.type === "required" && (
            <p className="text-danger">Password is required</p>
          )}
        </div>
        {/* email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            id="email"
            className="form-control"
          />
          {/* validation error message of username */}
          {errors.email?.type === "required" && (
            <p className="text-danger">Email is required</p>
          )}
        </div>
        {/* submit button */}
        <button type="submit" className="btn btn-success">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
