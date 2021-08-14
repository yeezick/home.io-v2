import { Route } from "react-router-dom";

import Landing from "./landing/Landing.jsx";
import Settings from "./settings/Settings.jsx";
import UserHome from "./userHome/UserHome.jsx";

const Main = ({ user }) => {
  return (
    <div>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/welcome">
          <UserHome user={user}/>
        </Route>
        <Route path="/settings">
          <Settings user={user}/>
        </Route>
    </div>
  );
};

export default Main;
