import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import "./Login.css";

export const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="registerContainer">
      <div className="backgroundImage"></div>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">MessWMe</span>
          <span className="title">Sign In</span>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <button>Sign In</button>
          </form>
          {err && <span style={{ color: "red" }}>Something went wrong</span>}
          <p>
            You don't have an account? <Link to={"/register"}>Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
