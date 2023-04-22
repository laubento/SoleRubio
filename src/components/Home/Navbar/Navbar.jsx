import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
const Navbar = () => {

  
  return (
    <div className={styles.container}>
      <div>acá viene el logo</div>
      <div className={styles.btnContainer}>
        {/* <Link href="/home">Home</Link> */}

        <Link href="/campaigns" className={styles.link}>
          CAMPAÑAS
        </Link>
        <Link href="/backstage">BACKSTAGE</Link>
        <Link href="/press">PRENSA</Link>
        <Link href="/press">CONTACTO</Link>
      </div>
    </div>
  );
};

export default Navbar;
