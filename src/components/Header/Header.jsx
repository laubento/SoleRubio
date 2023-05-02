/* eslint-disable react/no-children-prop */
//next
import Image from "next/image";
import Link from "next/link";
//react
import { useState } from "react";
//images
import logo from "../../../public/solerubioLogo.png";
//components
import NavLink from './Navlink/Navlink';
import Menu from './Menu/Menu'
//styles
import styles from "./Header.module.css";

const Header = () => {
  
  //declaro un estado para manejar el menú desplegable
  const [open, setOpen] = useState(false);
  
  //seteo el estado del menú desplegable para abrir o cerrar el menú
  const handleClick = () => {
    open ? setOpen(false) : setOpen(true);
  };
  
  //seteo el estado del menú desplegable para cerrarlo cuando se selecciona un link de navegación
  const handleClose = () => {
    setOpen(false)
  }
  
  return (
    <main className={styles.container}>
      <div className={styles.navbar}>
      <Menu handleClick={handleClick} open={open}/>
    
      <Link href="/" style={{ position: 'absolute' }}>
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
        <span className={styles.hiddenButton} > </span>            
        <NavLink href="/" children={"INICIO"} />
        <NavLink href="/campaigns" children={"CAMPAÑAS"} />
        <NavLink href="/backstage" children={"BACKSTAGE"} />
        <NavLink href="/press" children={"PRENSA"} />
        <Link className={styles.contact} href="/#contact">CONTACTO</Link>
      </div> 
      </div>       
    </main>
  );
};

export default Header;