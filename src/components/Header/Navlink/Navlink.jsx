/**** componente de navegación para dar estilo a los links activos *****/
//next
import Link from "next/link";
import { useRouter } from "next/router";
//react
import { useEffect, useState } from "react";
//styles
import styles from './Navlink.module.css'

const Navlink = ({ href, children }) => {
  const [ariaCurrent, setAriaCurrent] = useState();

  //uso el hook para extraer la ruta que se muestra en el browser
  const { asPath } = useRouter();

  //recargo la página para corregir delays entre la hidratación de next y la renderización
  useEffect(() => {
    //comparo si la ruta que se muestra en la url del navegador es la misma que la href
    const ariaCurrent = href === asPath ? "page" 
    : undefined;
    //actualizo el valor de ariaCurrent una vez recargada la página
    setAriaCurrent(ariaCurrent);
  }, [asPath, href]);

  return (
    <div className={styles.link}>
      <Link href={href} aria-current={ariaCurrent}>
        {children}
      </Link>
    </div>
  );
};

export default Navlink;