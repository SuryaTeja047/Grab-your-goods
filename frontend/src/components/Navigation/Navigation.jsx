import styles from "./Navigation.module.css";
import { Link, NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <header className={`container ${styles.navigation}`}>
      <div className={`${styles.navLogo}`}>
        <h1>Grab Your Goods</h1>
      </div>
      <ul>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.linkitem}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.linkitem}`
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.linkitem}`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/SignUp"}
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.linkitem}`
            }
          >
            Sign Up
          </NavLink>
        </li>
      </ul>
      <div className={`${styles.searchbox}`}>
        <input type="text" placeholder="what are you looking for?"></input>
        <button>
          <span>seachicon</span>
        </button>
      </div>
    </header>
  );
};

export default Navigation;
