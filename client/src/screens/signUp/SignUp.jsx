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
    <div>
      <h1>register form below</h1>
      <form onSubmit={(e) => handleRegister(e)}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={registerForm.name}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          value={registerForm.username}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={registerForm.email}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={registerForm.password}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
