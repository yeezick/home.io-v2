import { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { login, register, verify, logout } from "./services/user";
// components
import Layout from "./layout/layout/Layout.jsx";
import Main from "./screens/Main.jsx";

import "./App.css";

function App() {
const [user, setUser] = useState(null)
const history = useHistory();

const [registerForm, setRegisterForm] = useState({
  name: '',
  username: '',
  email: '',
  password: ''
})

const [loginForm, setLoginForm] = useState({
  email: '',
  password: ''
})

useEffect(() => {
  const reverify = async () => {
    const currentUser = await verify();
    setUser(currentUser)
  }
  reverify()
},[])

const handleRegister = async (e) => {
  e.preventDefault()
  const user = await register(registerForm)
  setUser(user)
  history.push("/settings")
}

const handleLogin = async (e) => {
  e.preventDefault()
  const user = await login(loginForm)
  setUser(user)
  history.push("/welcome")
}

const handleLogout = () => {
  logout()
  setUser(null)
  history.push("/")
}

  return (
    <div>
      <Layout className="App">
        <Main />
      </Layout>
    </div>
  );
} 

export default App;
