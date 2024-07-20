import styles from "./LoginSignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/signup";
    const data = {
      name,
      mail,
      password,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(url, options);
      if (response.status !== 200 && response.status !== 201) {
        const data = await response.json();
        alert(data.message);
      } else {
        alert("Registration Successful");
        navigate("/login");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={`container ${styles.cont}`}>
      <div className={` ${styles.authimage}`}>
        <img src="" alt="" />
      </div>
      <div className={` ${styles.authinfo}`}>
        <div>
          <h1>Create an account</h1>
          <h5>Enter your details below</h5>
        </div>
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Email or Phone Number"
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className={`${styles.CreateButton}`} type="submit">
            Create Account
          </button>
        </form>
        <p>
          Already have an account? <Link to={"/login"}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
