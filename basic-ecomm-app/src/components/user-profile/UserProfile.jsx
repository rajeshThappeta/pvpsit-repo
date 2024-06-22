import './UserProfile.css';
import {useContext} from 'react';
import { userLoginContext } from '../../contexts/userLoginContext';
import { Link, Outlet } from 'react-router-dom';
import { AiFillProduct } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";

function UserProfile() {
  let {currentUser}=useContext(userLoginContext)

  
  return (
    <div>
        <div className="text-end text-end p-3">
          <img src={currentUser.profileImage} width='75px' alt="" className='rounded-circle' />
          <p className="fs-3">{currentUser.username}</p>
        </div>

        {/* links to Products and Cart */}
        <ul className="nav fs-5 p-3 justify-content-around my-2">
        <li className="nav-item">
          <Link to="products" className="nav-link text-info">
            <AiFillProduct className="fs-3 text-warning " /> Products
          </Link>
        </li>
        <li className="nav-item">
          <Link to="cart" className="nav-link text-info">
            <FaCartArrowDown className="fs-3 text-warning " /> Cart
          </Link>
        </li>
        
      </ul>

      <Outlet />
    </div>
  )
}

export default UserProfile