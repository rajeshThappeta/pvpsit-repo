import React from 'react';
import {Link, Outlet} from 'react-router-dom'

function Tech() {
  return (
    <div>
        {/* navbar with links to 3 components */}
        <ul className="nav justify-content-center  fs-4 mt-4">
                <li className="nav-item">
                    <Link to="java" className='nav-link'>Java</Link>
                </li>
                <li className="nav-item">
                    <Link to="node" className='nav-link' > NodeJS</Link>
                </li>
                <li className="nav-item">
                    <Link to="vue" className='nav-link'>VueJS</Link>
                </li>
               
           </ul>
           {/* placeholder to display children of tech component */}
           <Outlet />
    </div>
  )
}

export default Tech