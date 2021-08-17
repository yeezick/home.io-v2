import "./Login.css";

const Login = ({ setLoginForm, loginForm, handleLogin }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div className="login">
      <h2 className="login-title">Your home is yours only.</h2>
      <form className="login-form" onSubmit={(e) => handleLogin(e)}>
        <p className="login-subtitle">
          If you lost your key, we can get it right back to you, just log in!{" "}
        </p>

        <div className="login-item">
          <label className="login-label" htmlFor="email">
            Email:
          </label>
          <input
            className="login-input"
            type="text"
            name="email"
            value={loginForm.email}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="login-item">
          <label className="login-label" htmlFor="password">
            Password:
          </label>
          <input
            className="login-input"
            type="password"
            name="password"
            value={loginForm.password}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button className="login-button" type="submit">
          Generate key
        </button>
      </form>
    </div>
  );
};

export default Login;
