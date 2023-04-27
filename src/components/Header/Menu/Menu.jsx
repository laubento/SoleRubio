import styles from "./Menu.module.css";

const Menu = ({ handleClick, open }) => {
  return (
    <div>
      <nav className={styles.menuWrapper}>

          <button onClick={handleClick}>
   
            <span className={open ? styles.closingTag : styles.menuTag}></span>
            <span className={open? styles.menuWrapper : styles.menuTag}></span>
            <span className={open? styles.menuWrapper : styles.menuTag}></span>

            {/* <svg
              viewBox="0 0 100 80"
              width="30"
              height="30"
              fill="var(--main-color)"
            >
              <rect width="90" height="10" />
              <rect y="30" width="90" height="10" />
              <rect y="60" width="90" height="10" />
            </svg> */}
          </button>
     
      </nav>
    </div>
  );
};

export default Menu;
