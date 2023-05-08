import style from "./PressComp.module.css";
import img from "../../images/prensa.png";
import img2 from "../../images/pepe.png";
import img3 from "../../images/prensa2.png";
import Image from "next/image";

import React from "react";

const PressComp = ({ data }) => {
  return (
    <div className={style["container-main"]}>
      <h3 className={style.titles}>PRENSA</h3>
      <div className={style["img-container"]}>
        <Image
          src={data.resources[0].url}
          className={style.images}
          alt="press"
          width={1000}
          height={600}
        />
        <Image
          src={data.resources[1].url}
          className={style.images}
          alt="press"
          width={1000}
          height={1000}
        />
        <Image
          src={data.resources[2].url}
          className={style.images}
          alt="press"
          width={1000}
          height={600}
        />
        <Image
          src={data.resources[0].url}
          className={style.images}
          alt="press"
          width={1000}
          height={600}
        />
        <Image
          src={data.resources[1].url}
          className={style.images}
          alt="press"
          width={1000}
          height={1000}
        />
        <Image
          src={data.resources[2].url}
          className={style.images}
          alt="press"
          width={1000}
          height={600}
        />
        <Image
          src={data.resources[0].url}
          className={style.images}
          alt="press"
          width={1000}
          height={600}
        />
        <Image
          src={data.resources[1].url}
          className={style.images}
          alt="press"
          width={1000}
          height={1000}
        />
        <Image
          src={data.resources[2].url}
          className={style.images}
          alt="press"
          width={1000}
          height={600}
        />
        <Image src={img} className={style.images} alt="press" />
        {/* <Image src={img2} className={style.images} alt="press" />
        <Image src={img3} className={style.images} alt="press" />
        <Image src={img} className={style.images} alt="press" />
        <Image src={img2} className={style.images} alt="press" />
        <Image src={img3} className={style.images} alt="press" />
        <Image src={img} className={style.images} alt="press" /> */}
      </div>
    </div>
  );
};

export default PressComp;
