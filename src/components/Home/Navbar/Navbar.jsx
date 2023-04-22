import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import NavLink from "@/components/NavLink/NavLink";
import logo from "../../../../public/solerubioLogo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <Link href="/">
          <Image
            src={logo}
            alt="logo soleRubio"
            width="auto"
            height={50}
            responsive= 'true'
            style={{ position: "absolute", top: "3rem" }}
          />
        </Link>
        <NavLink href="/" children="HOME" />

        <NavLink href="/campaigns" children="CAMPAÑAS" />
        <NavLink href="/backstage" children="BACKSTAGE" />
        <NavLink href="/press" children="PRESS" />
        <NavLink href="/press" children="CONTACT" />
      </div>
    </div>
  );
};

export default Navbar;
