import React from 'react';
import {useLocation} from 'react-router-dom'

function UserDetails() {
    let {state}=useLocation()
   

  return (
    <div>
        <div className="card">
            <div className="card-body text-center w-50   mx-auto mt-5 shadow-lg rounded-4">
                <h2>{state.user.name}</h2>
                <p className="lead">{state.user.username}</p>
                <p className="lead">{state.user.email}</p>
                <p className="lead">{state.user.website}</p>
            </div>
        </div>
    </div>
  )
}

export default UserDetails