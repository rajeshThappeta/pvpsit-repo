import {useForm} from 'react-hook-form'

function Login(){

    let {register,handleSubmit,formState:{errors}}=useForm()


    function onUserLogin(userCredentialsObj){
        console.log(userCredentialsObj)
    }

    return (
        <div>
            <h1>Login</h1>
            <form  className="w-50 mx-auto mt-5 bg-light p-4" onSubmit={handleSubmit(onUserLogin)}>
                {/* username */}
                <div className="mb-3">
                    <input type="text" {...register('username')}  className="form-control " placeholder='Usename' />
                </div>
                {/* password */}
                <div className="mb-3">
                    <input type="password" {...register('password')}  className="form-control " />
                </div>
                {/* submit btn */}
                <button type="submit" className="btn btn-success">Login</button>
            </form>
        </div>
    )
}

export default Login;