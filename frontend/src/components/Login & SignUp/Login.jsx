import styles from './LoginSignUp.module.css'

const Login = () => {
  return (
    <div className={`container ${styles.cont}`}>
      <div className={` ${styles.authimage}`}>
        <img src="" alt="" />
      </div>
      <div className={` ${styles.authinfo}`}>
        <div>
          <h1>Log in to Exclusive</h1>
          <h5>Enter your details below</h5>
        </div>
        <form>
          <div className="form-control">
            <input type="text" placeholder="Email or Phone Number" />
          </div>
          <div className="form-control">
            <input type="password" placeholder="Password" />
          </div>
        </form>
        <div className={` ${styles.btn}`}>
          <button className={`${styles.CreateButton}`} >Login</button>
          <a href="">Forget Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
