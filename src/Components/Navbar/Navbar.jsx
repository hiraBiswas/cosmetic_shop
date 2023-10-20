import {  Link, NavLink } from "react-router-dom";
import './navbar.css'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Navbar = () => {
    const links =<>
    <li className="text-lg lg:text-xl font-semibold"><NavLink to="/">Home</NavLink></li>
    <li className="text-lg lg:text-xl font-semibold"><NavLink to="/addProduct">Add Product</NavLink></li>
    <li className="text-lg lg:text-xl font-semibold"><NavLink to="/myCart">My Cart</NavLink></li>
    
    </>

const {user, logOut}= useContext(AuthContext)
const handleSignOut=()=>{
     logOut()
     .then(result=>{
      console.log(result.user)
     })

     .then(error=>{
      console.error(error)
     })
}
    return (
        <div>
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
       {links}
      </ul>
    </div>
    <div className="flex items-center">
        <img className="h-24 w-24 hidden lg:block" src="./logo2.png" alt="" />
    <a className="btn btn-ghost  normal-case text-2xl hidden lg:block">𝓖𝓵𝓪𝓶𝓸𝓾𝓻<span className="text-amber-600 fancy">𝓖𝓵𝓮𝓪𝓶</span></a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
  {user ? (
            <div className="flex items-center">
             
              <img
                src={user.photoURL} 
                alt="Profile"
                className="h-10 w-10 rounded-full mr-1"
              />
              <span className="text-lg font-semibold">{user.displayName}</span>
              <Link>
                <button onClick={handleSignOut} className="btn bg-amber-600 text-white ml-3">
                  Sign Out
                </button>
              </Link>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn bg-amber-600 text-white">Login</button>
            </Link>
          )}
 
</div>
        </div>
        </div>
    );
};

export default Navbar;