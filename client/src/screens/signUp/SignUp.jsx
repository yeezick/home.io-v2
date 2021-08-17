import "./SignUp.css";

const SignUp = ({ handleRegister, registerForm, setRegisterForm }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm((existingFormData) => ({
      ...existingFormData,
      [name]: value,
    }));
  };

  return (
    <div className="signup">
      <h2 className="signup-title">A place that only belongs to you.</h2>
      <form className="signup-form" onSubmit={(e) => handleRegister(e)}>
        <p className="signup-title-subtext">
          Create an account to get started.
        </p>

        <div className="signup-item">
          <label className="signup-label" htmlFor="name">
            Name:
          </label>
          <input
            className="signup-input"
            type="text"
            name="name"
            value={registerForm.name}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="signup-item">
          <label className="signup-label" htmlFor="username">
            Username:
          </label>
          <input
            className="signup-input"
            type="text"
            name="username"
            value={registerForm.username}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="signup-item">
          <label className="signup-label" htmlFor="email">
            Email:
          </label>
          <input
            className="signup-input"
            type="email"
            name="email"
            value={registerForm.email}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="signup-item">
          <label className="signup-label" htmlFor="password">
            Password:
          </label>
          <input
            className="signup-input"
            type="password"
            name="password"
            value={registerForm.password}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button className="signup-button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default SignUp;
