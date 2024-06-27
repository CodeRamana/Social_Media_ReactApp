import React from "react";
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to = "/" className="my-custom-anchor" >Home</Link></li>
        <li><Link to = "/Post" className="my-custom-anchor" >Post</Link></li>
        <li><Link to = "/About" className="my-custom-anchor" >About</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
