import { Route } from "react-router-dom";

import Landing from "./landing/Landing.jsx";
import Settings from "./settings/Settings.jsx";
import UserHome from "./userHome/UserHome.jsx";

const Main = ({ user, setUser }) => {
  return (
    <div>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/welcome">
          <UserHome user={user} setUser={setUser}/>
        </Route>
        <Route path="/settings">
          <Settings user={user} setUser={setUser}/>
        </Route>
    </div>
  );
};

export default Main;
