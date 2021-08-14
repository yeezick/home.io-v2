import "./Login.css";

const Login = ({setLoginForm, loginForm, handleLogin}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Log in screen</h1>
      <form onSubmit={(e) => handleLogin(e)}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={loginForm.email}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="password">Password:</label>
        <input 
        type="password" 
        name="password" 
        value={loginForm.password}
        onChange={(e) => handleChange(e)} />
      </form>
    </div>
  );
};

export default Login;
