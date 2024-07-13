import styles from "./LoginSignUp.module.css";
import {useNavigate,Link} from 'react-router-dom'
const SignUp = () => {
  const navigate = useNavigate();
  const handleLogin = ()=>navigate('/login');
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
        <form>
          <div className="form-control">
            <input type="text" placeholder="Name" />
          </div>
          <div className="form-control">
            <input type="text" placeholder="Email or Phone Number" />
          </div>
          <div className="form-control">
            <input type="password" placeholder="Password" />
          </div>
        </form>
        <button className={`${styles.CreateButton}`}>Create Account</button>
        <p>
          Already have account? <Link to={'/login'}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
