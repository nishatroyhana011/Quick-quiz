import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <NavLink className="btn btn-ghost normal-case text-xl" to='/'>Quick Quiz</NavLink>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li><NavLink to='/'> Home </NavLink></li>
            <li><NavLink to='/statistics'> Statistics </NavLink></li>
            <li><NavLink to='/blog'> Blog </NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;