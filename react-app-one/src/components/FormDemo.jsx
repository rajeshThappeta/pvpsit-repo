
import { useForm } from 'react-hook-form'

function FormDemo() {

    let { register, handleSubmit, formState: { errors } } = useForm()

    function submitForm(obj) {
        console.log(obj)
    }



    console.log("errors is ", errors)

    return (
        <div>
            <h2 className="text-center display-3">Form Submission & Validation</h2>
            <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit(submitForm)}>
                {/* username */}
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text"  {...register("username", { required: true,minLength:4 })} id="username" className="form-control" />
                    {/* username validation error message */}
                    {errors.username?.type === 'required' && <p className='text-danger'>username is required</p>}
                    {errors.username?.type==='minLength'&& <p className='text-danger'>Min length should be 4</p>}
                </div>
                {/* email */}
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" {...register("email", { required: true })} id="email" className="form-control" />
                </div>
                {/* select element */}
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">Select city</label>
                    <select {...register("city")} id="city" className="form-select">
                        <option value="vijayawada">Vijayawada</option>
                        <option value="hyderabad">Hyderabad</option>
                        <option value="guntur">Guntur</option>
                    </select>
                </div>
                {/* checkboxes */}
                <div className="mb-3">
                    <label htmlFor="">Select skills</label>
                    {/* skill-1 */}
                    <div className="form-check">
                        <input type="checkbox" {...register("js")} id="js" className="form-check-input" />
                        <label htmlFor="js" className="form-checl-label">JavaScript</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox"  {...register("react")} id="react" className="form-check-input" />
                        <label htmlFor="react" className="form-checl-label">React</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox"  {...register("angualr")} id="angular" className="form-check-input" />
                        <label htmlFor="angular" className="form-check-label">Angular</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

export default FormDemo;











