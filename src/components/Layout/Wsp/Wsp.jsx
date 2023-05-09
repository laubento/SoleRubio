// import React from 'react'
import Link from "next/link";
import wtsp from "../../../../public/icons8-whatsapp.svg";
import Image from "next/image";
import style from "./Wsp.module.css"

const Wsp = () => {
  return (
    <div>
      <Link target="_blank" href="https://wa.me/5491132911607">
        <Image
        src={wtsp}
        className={style.logo}
         />
      </Link>
    </div>
  );
};

export default Wsp;
