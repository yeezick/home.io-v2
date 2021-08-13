import { Route, Redirect } from "react-router-dom";

import Landing from "./landing/Landing.jsx";
import Login from "./login/Login.jsx";
import Settings from "./settings/Settings.jsx";
import SignUp from "./signUp/SignUp.jsx";
import UserHome from "./userHome/UserHome.jsx";

const Main = ({ user }) => {
  return (
    <div>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/welcome">
          <UserHome />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
    </div>
  );
};

export default Main;
