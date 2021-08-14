import {Link} from "react-router-dom"
// components

import "./Header.css";

const Header = ({user}) => {
  return (
    <div>
        <Link to="/">
          Landing
        </Link>
        <Link to="/welcome">
          userHome
        </Link>
        <Link to="/settings">
          settings
        </Link>
    </div>
  );
};

export default Header;
