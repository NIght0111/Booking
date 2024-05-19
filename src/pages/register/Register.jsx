import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";

const Register = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (!credentials.name || !credentials.email || !credentials.password) {
      setError("All fields are required.");
      return;
    }

    try {
      await axios.post("/register", credentials);
      alert("Registration Successful. Now you can login.");
      navigate("/login");
    } catch (err) {
      setError("Registration failed. Please try again later.");
    }
  };

  return (
    <div className="register">
      <div className="rContainer">
        <h1 className="rTitle">Register</h1>
        <input
          type="text"
          placeholder="Name"
          id="name"
          onChange={handleChange}
          className="rInput"
          value={credentials.name}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
          className="rInput"
          value={credentials.email}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
          className="rInput"
          value={credentials.password}
        />
        <button onClick={handleClick} className="rButton">
          Register
        </button>
        {error && <span className="errorMessage">{error}</span>}
        <div className="loginRedirect">
          Already a member?{" "}
          <a href="/login" className="loginLink">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
