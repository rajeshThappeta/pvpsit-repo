import { Link } from 'react-router'

function Header() {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link" to="">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="add-user">AddUser</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="users">Users</Link>
            </li>

        </ul>
    )
}

export default Header