import styles from "./Menu.module.css";

const Menu = ({ handleClick, open }) => {
  return (
    <div>
      <nav className={styles.menuWrapper}>
          <button onClick={handleClick}>   
            <span className={open ? styles.closingTag : styles.menuTag}></span>
            <span className={open? styles.menuWrapper : styles.menuTag}></span>
            <span className={open? styles.menuWrapper : styles.menuTag}></span>
          </button>
     
      </nav>
    </div>
  );
};

export default Menu;
