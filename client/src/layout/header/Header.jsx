import {Link} from "react-router-dom"

import "./Header.css";

const Header = ({user}) => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <p>icon</p>
        <h1>Home.io</h1>
      </div>

      <div className="nav-right">
        <Link to="/">
          Landing
        </Link>
        <Link to="/welcome">
          userHome
        </Link>
        <Link to="/settings">
          settings
        </Link>
        <Link to="/signup">
          Sign up
        </Link>
        <Link to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
