/* eslint-disable react/no-children-prop */
//next
import Image from "next/image";
import Link from "next/link";
//react
import { useState } from "react";
//images
import logo from "../../../public/solerubioLogo.png";
//components
import NavLink from './NavLink/NavLink';
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
    <div className={styles.container}>
   {/* <div> */}
      <Menu handleClick={handleClick}/>
    
      <Link href="/" style={{ border: "none" }}>
        <Image
          src={logo}
          alt="logo soleRubio"
          width="auto"
          height={50}
          responsive="true"
          className={styles.logo}
        />
      </Link>
      {/* </div> */}
      <div      
        className={open ? styles.navContainerOpen : styles.navContainerClosed} onClick={handleClose}
      >  
    
             
        <span className={styles.hiddenButton} > </span>            

        <NavLink href="/" children={"INICIO"} />
        <NavLink href="/campaigns" children={"CAMPAÑAS"} />
        <NavLink href="/backstage" children={"BACKSTAGE"} />
        <NavLink href="/press" children={"PRESS"} />
        <NavLink href="/press" children={"CONTACT"} />
      </div>        
    </div>
  );
};

export default Header;