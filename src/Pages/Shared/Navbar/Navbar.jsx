import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../components/AuthProvider/AuthProvider";

const Navbar = () => {
  const {user,logoutUser,reload} = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () =>{

    logoutUser()
    .then()
    .catch()

  }
  return (
    <div className="navbar bg-base-100 lg:max-w-[85%] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/update-profile"}>Update Profile</NavLink>
            </li>

            <li>
              <NavLink to={"/agents"}>Agents</NavLink>
            </li>

            {
              user && (reload || user.photoURL) ? 
              <li onClick={handleLogOut}>
              Logout</li>
              :
              <li><Link to={"/login"}>Sign In</Link></li>
              
            }
          
          </ul>
        </div>
        <NavLink className="font-bold lg:text-3xl text-2xl" to={"/"}>UrbanAbodes</NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li>
              <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
              <NavLink to={"/update-profile"}>Update Profile</NavLink>
        </li>
        <li>
              <NavLink to={"/agents"}>Agents</NavLink>
        </li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
      {
        user && (reload || user.photoURL) ? 
        <div className="flex items-center gap-2">
        <div className="tooltip tooltip-left cursor-pointer avatar" data-tip={user.displayName}>
        <div className="w-10 h-10 rounded-full">
          <img alt="user photo" src={user.photoURL} />
        </div>
      </div>
        <button onClick={handleLogOut} className="btn btn-neutral text-white text-lg hidden lg:flex">Logout</button>
        </div>
        :
        <Link to={"/login"} className="btn btn-outline btn-success text-white text-lg">Sign In</Link>

      }  
      </div>
    </div>
  );
};

export default Navbar;
