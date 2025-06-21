
import { useForm } from 'react-hook-form'

function FormDemo() {

    let { register, handleSubmit } = useForm()

    function submitForm(obj) {
        console.log(obj)
    }

    return (
        <div>
            <h2 className="text-center display-3">Form Submission & Validation</h2>
            <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit(submitForm)}>
                {/* username */}
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text"  {...register("username")} id="username" className="form-control" />
                </div>
                {/* email */}
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" {...register("email")} id="email" className="form-control" />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

export default FormDemo;