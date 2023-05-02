import style from "./PressComp.module.css";
import img from "../../images/prensa.png";
import img2 from "../../images/pepe.png";
import img3 from "../../images/prensa2.png";
import Image from "next/image";

import React from "react";

const PressComp = () => {
  return (
    <div className={style["container-main"]}>
      <div className={style["img-container"]}>
        <Image src={img} className={style.images} alt="press" />
        <Image src={img2} className={style.images} alt="press" />
        <Image src={img3} className={style.images} alt="press" />
        <Image src={img} className={style.images} alt="press" />
        <Image src={img2} className={style.images} alt="press" />
        <Image src={img3} className={style.images} alt="press" />
        <Image src={img} className={style.images} alt="press" />
        <Image src={img2} className={style.images} alt="press" />
        <Image src={img3} className={style.images} alt="press" />
        <Image src={img} className={style.images} alt="press" />
      </div>
    </div>
  );
};

export default PressComp;
