import { Link } from 'react-router'

function Header() {
  return (
    <nav className='nav justify-content-end'>
      <li className="nav-item">
        <Link className='nav-link' to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className='nav-link' to="register">Register</Link>
      </li>
      <li className="nav-item">
        <Link className='nav-link' to="login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className='nav-link' to="technologies">Technologies</Link>
      </li>
    </nav>
  )
}

export default Header