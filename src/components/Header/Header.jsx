import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../../public/solerubioLogo.png";
import NavLink from './Navlink/Navlink';
import Menu from './Menu/Menu'
import styles from "./Header.module.css";

const Header = () => {
  
  const [open, setOpen] = useState(false);
  
  const handleClick = () => {
    open ? setOpen(false) : setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false)
  }
  
  return (
    <main className={styles.container}>
      <div className={styles.navbar}>
      <Menu handleClick={handleClick} open={open} />
    
      <Link href="/" className={styles.linkLogo}>
        <Image
          src={logo}
          alt="logo soleRubio"
          width="auto"
          height={50}
          responsive="true"
          className={open ? styles.openLogo : styles.logo}
        />        
      </Link>
      <div      
        className={open ? styles.navContainerOpen : styles.navContainerClosed} onClick={handleClose}
      >              
        <NavLink href="/" connect="INICIO" />
        <NavLink href="/campaigns" connect="SHOOTING" />
        <NavLink href="/backstage" connect="BACKSTAGE" />
        <NavLink href="/press" connect="PRENSA" />
        <Link className={styles.contact} href="/#contact">CONTACTO</Link>
      </div> 
      </div>       
    </main>
  );
};

export default Header;