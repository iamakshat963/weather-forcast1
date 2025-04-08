import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login.css";
import spinner from "../assets/spinner.png";
import leftImage from "../assets/weather_forcast.jpg"; 

const Login = () => {
  const navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (Username === "akshat" && password === "akshat963") {
        alert("Login success");
        navigate("/app");
      } else {
        alert("Invalid credentials");
        setLoading(false);
      }
    }, 5000);
  };

  return (
    <div className="login-container">
      {/* Left Side - Image */}
      <div className="login-left">
        <img src={leftImage} alt="Login Visual" className="left-img" />
      </div>

      {/* Right Side - Form */}
      <div className="login-right">
        <div className="login-box">
          <h2>Weather Forcast</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
              disabled={loading}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
            <button type="submit" disabled={loading}>
              Login
            </button>
          </form>
        </div>

        {loading && (
          <div className="overlay">
            <img src={spinner} alt="Loading..." className="spinner" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
