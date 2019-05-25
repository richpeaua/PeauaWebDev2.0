import React from 'react';
import { Link } from "react-router-dom";
import '../assets/css/NavBar.css'

const NavBar = () => {
	return (
      <div className="NavBar">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Projects'>Projects</Link></li>
          <li><Link to='/Blog'>Blog</Link></li>
        </ul>
      </div>

	);
}

export default NavBar;