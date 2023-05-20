import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import logo from '../../../assets/images/logo/logo.png'
import "./Header.css"
const Header = () => {
  // Auth context
  const { user, loading,logOut } = useContext(AuthContext);
  console.log(user)
  const navigate=useNavigate()
  const handleLogout=()=>{
    logOut().then(result=>{
      navigate('/login')
    }).catch(error=>{
      console.log(error.message)
    })
  }
  if (loading) {
    return <div>loading...</div>;
  } else {
    return (
      <div>
        <div className="navbar bg-base-100 rounded-lg py-5">
          <div className="navbar-start lg:w-[30%]">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <Link>All Toys</Link>
                </li>
              </ul>
            </div>
            <div className="flex gap-2 items-center">
              <img
                className="w-[150px] h-[70px] "
                src={logo}
                alt=""
              />
              <h2>Disney dolls</h2>
            </div>
          </div>
          <div className="navbar-end lg:w-[70%] hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <div className="flex items-center gap-5 mr-[20px]">
                <NavLink to="/">Home</NavLink>
                <NavLink to='/allToys'>All Toys</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                {user?<NavLink to="/addToy">Add A Toy</NavLink>:""}
                {user?<NavLink to={`/myToys`}>My Toys</NavLink>:""}
                {user?<Link onClick={handleLogout}>log Out</Link>:<><NavLink to='/login'>Login</NavLink></>}
              </div>
              {
                user && user && <abbr title={user.displayName}><img className="w-[50px] h-[50px] rounded-full" src={user.photoURL} alt="" /></abbr>
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default Header;
