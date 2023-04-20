import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchKey, setSearchKey] = useState("");
  const navigate = useNavigate()
  const search = (e) => {
    e.preventDefault();
    navigate(`/search/${searchKey}`);
  }
  
  return (
    <div className="navbar bg-black fixed top-0 z-40 text-white">
      <div className="flex-1">
        <Link to={"/"}>
          <span className="btn btn-ghost normal-case text-xl text-red-300">
            movieHub
          </span>
        </Link>
      </div>
      <div className="flex-none gap-2">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active-cl" : "none-cl")}
            >
              <span>Popular</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/upcoming"}
              className={({ isActive }) => (isActive ? "active-cl" : "none-cl")}
            >
              <span>Upcoming</span>
            </NavLink>
          </li>
        </ul>
        <form onSubmit={search}>
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered text-black"
              onChange={(e) => setSearchKey(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
