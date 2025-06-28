import { Link, Outlet } from 'react-router'

function Technologies() {
  return (
    <div>
      <h1 className='text-center'>Technologies</h1>
      {/* links */}
      <ul className="nav justify-content-around">
        <li className="nav-item">
          <Link to='java' className='nav-link'>Java</Link>
        </li>
        <li className="nav-item">
          <Link to='node' className='nav-link'>Node</Link>
        </li>
        <li className="nav-item">
          <Link to='vue' className='nav-link'>Vue</Link>
        </li>
      </ul>
      <div>
        {/* placeholder for nested routing */}
        <Outlet />
      </div>
    </div>
  )
}

export default Technologies