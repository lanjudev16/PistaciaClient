import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Header = () => {
  // Auth context
  const { user, loading,logOut } = useContext(AuthContext);
  const navigate=useNavigate()
  const handleLogout=()=>{
    logOut().then(result=>{
      // navigate('/login')
    }).catch(error=>{
      console.log(error.message)
    })
  }
  if (loading) {
    return <div>loading...</div>;
  } else {
    return (
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start w-[30%]">
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
                className="w-[100px] h-[100px] "
                src="https://htmldemo.net/kobe/kobe/assets/img/printed-summer-dress-11.jpg"
                alt=""
              />
              <h2>Disney dolls</h2>
            </div>
          </div>
          <div className="navbar-end w-[70%] hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <div className="flex items-center gap-5 mr-[20px]">
                <Link>Home</Link>
                <Link>All Toys</Link>
                <Link>Blogs</Link>
              </div>
              <div className="flex items-center">
                {user ? (
                  <div className="flex gap-5">
                    <Link to="/addToy">Add A Toy</Link> <Link>My Toys</Link>{" "}
                    <Link>{user.displayName}</Link>
                    <button onClick={handleLogout}><Link>logOut</Link></button>
                  </div>
                ) : (
                  <><Link to='/login'>Login</Link></>
                )}
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default Header;
