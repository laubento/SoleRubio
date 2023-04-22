import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import NavLink from "@/components/NavLink/NavLink";


const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>acá viene el logo</div>
      <div className={styles.btnContainer}>      
       

        <NavLink href="/" children="HOME" />
        <NavLink href="/campaigns" children="CAMPAÑAS" />
        <NavLink href="/backstage" children="BACKSTAGE" />
        {/* <Link href="/press">CONTACTO</Link> */}
        <NavLink href="/press" children="PRESS" />
        <NavLink href="/press" children="CONTACT" />
      </div>
    </div>
  );
};

export default Navbar;
