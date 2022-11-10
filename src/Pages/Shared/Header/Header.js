import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const menuItems = (
    <>
      <>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
      </>
      {user && (
        <>
          <li>
            <Link to='/myReviews'>My Reviews</Link>
          </li>
          <li>
            <Link to='/addServices'>Add Services</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-secondary text-white">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle btn-xs sm:btn-sm "
          >
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        {/* --- */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {/* ---- */}
            {menuItems}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost upper-case lg:text-2xl">
          Photo Ink
        </Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline text-white font-normal">
          {user ? (
            <Link onClick={logOut}>Logout</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
