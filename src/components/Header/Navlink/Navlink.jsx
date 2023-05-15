/**** componente de navegación para dar estilo a los links activos *****/
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from './Navlink.module.css'

const Navlink = ({ href, connect }) => {
  const [ariaCurrent, setAriaCurrent] = useState();

  const { asPath } = useRouter();

  useEffect(() => {
    const ariaCurrent = href === asPath || (asPath === '/#contact' && href === '/') ? "page" : undefined;
    setAriaCurrent(ariaCurrent);
  }, [asPath, href]);

  return (
    <div className={styles.link}>
      <Link href={href} aria-current={ariaCurrent}>
        {connect}
      </Link>
    </div>
  );
};

export default Navlink;