import { useContext } from 'react'
import { userContextObj } from '../contexts/UserStore'

function Test2() {

    const { user, setUser } = useContext(userContextObj)
    console.log("Test2 rendered")
    return (
        <div className='bg-warning p-5'>
            <h2>Test2</h2>
            <p className="lead">{user.uid}</p>
            <p className="lead">{user.name}</p>
            <button className="btn btn-danger" onClick={() => setUser({ ...user, name: "Bhanu" })}>Change user</button>
        </div>
    )
}

export default Test2