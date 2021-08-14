import {Link} from "react-router-dom"
// components
import Landing from "../../screens/landing/Landing.jsx";
import Settings from "../../screens/settings/Settings.jsx";
import UserHome from "../../screens/userHome/UserHome.jsx";

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
