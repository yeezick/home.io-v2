import { Link } from "react-router-dom";
import {FaHome} from "react-icons/fa"

import "./Header.css";

const Header = ({ user }) => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        {/* <p>icon</p> */}
        {!user ? (
       <Link to="/" className="navbar-title">
         <FaHome size={40}/>
         <h1>Home.io</h1></Link>)
      :
      (
      <Link to="/welcome" className="navbar-title"><h1>Home.io</h1></Link>
      )
      }
      </div>

      <div className="nav-right">
        {!user ? (
          <div className="nav-nouser-links">
            <Link to="/signup">Sign up</Link>
            <Link to="/login">Login</Link>
          </div>
        ) : (
          <div className="nav-links">
            <Link to="/welcome">Home</Link>
            <Link to="/settings">Settings</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
