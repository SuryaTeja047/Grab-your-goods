import styles from "./Footer.module.css";
const Footer = () => {
  const currentyear = new Date().getFullYear();
  return (
    <footer className={`${styles.footerContainer}`}>
      <div className={`container ${styles.innerContainer}`}>
          <div className={`${styles.blocks}`}>
            <h3>Support</h3>
            <p>111 Ghatkhesar , Hyderabad, 500088, Telangana.</p>
            <p>grabyourgoods@gmail.com</p>
            <p>+7777-88888-9999</p>
          </div>
          <div className={`${styles.blocks}`}>
            <h3>Account</h3>
            <p>
              <a href="">My Account</a>
            </p>
            <p>
              <a href="">Login / Register</a>
            </p>
            <p>
              <a href="">Cart</a>
            </p>
            <p>
              <a href="">Wishlist</a>
            </p>
            <p>
              <a href="">Shop</a>
            </p>
          </div>
          <div className={`${styles.blocks}`}>
            <h3>Quick Link</h3>
            <p>
              <a href="">Privacy Popcy</a>
            </p>
            <p>
              <a href="">Terms of Use</a>
            </p>
            <p>
              <a href="">FAQ</a>
            </p>
            <p>
              <a href="">Contact</a>
            </p>
          </div>
      </div>

      <hr />

      <div className={`${styles.copyright}`}>
        <center>
          <p> &copy; Copyright  {currentyear} All right reserved</p>
        </center>
      </div>
    </footer>
  );
};

export default Footer;
