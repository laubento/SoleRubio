import style from "./PressComp.module.css";
import img from "../../images/prensa.png";
import img2 from "../../images/pepe.png";
import img3 from "../../images/prensa2.png";
import Image from "next/image";
import { CiCircleRemove } from "react-icons/ci";

import React, { useState } from "react";

const PressComp = ({ data }) => {
  const [modalState, setModalState] = useState(false);
  const [image, setImage] = useState();
  const [index, setIndex] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    let src = e.target.src;
    console.log(src, "SRCCCCC");
    let urlModal = src.substring(src.indexOf("/_next"));
    setImage(urlModal);
    console.log(image, "SRC DONE");
    setModalState(true);
  };

  return (
    <>
      {modalState && (
        <div className={style.overlay} onClick={(e) => setModalState(false)}>
          <CiCircleRemove
            className={style.buttonRemove}
            onClick={(e) => setModalState(false)}
          />
          <Image
            src={image}
            alt="press"
            className={style.totalImage}
            width={1000}
            height={1000}
          />
        </div>
      )}
      <div className={style["container-main"]}>
        <h3 className={style.titles}>PRENSA</h3>
        <div className={style["img-container"]}>
          <Image
            src={data[0]}
            className={style.images}
            alt="press"
            width={1000}
            height={1000}
            tabindex="0"
            onClick={(e) => handleChange(e)}
          />
          <Image
            src={data[2]}
            className={style.images}
            alt="press"
            width={1000}
            height={1000}
            tabindex="0"
            onClick={(e) => handleChange(e)}
          />
          <Image
            src={data[2]}
            className={style.images}
            alt="press"
            width={1000}
            height={600}
            tabindex="0"
            onClick={(e) => handleChange(e)}
          />
          <Image
            src={data[0]}
            className={style.images}
            alt="press"
            width={1000}
            height={600}
            tabindex="0"
            onClick={(e) => handleChange(e)}
          />
          <Image
            src={data[0]}
            className={style.images}
            alt="press"
            width={1000}
            height={600}
            tabindex="0"
            onClick={(e) => handleChange(e)}
          />
          <Image
            src={data[2]}
            className={style.images}
            alt="press"
            width={1000}
            height={600}
            tabindex="0"
            onClick={(e) => handleChange(e)}
          />
          <Image
            src={data[0]}
            className={style.images}
            alt="press"
            width={1000}
            height={600}
            tabindex="0"
            onClick={(e) => handleChange(e)}
          />
          <Image
            src={data[1]}
            className={style.images}
            alt="press"
            width={1000}
            height={1000}
            tabindex="0"
            onClick={(e) => handleChange(e)}
          />
          <Image
            src={data[2]}
            className={style.images}
            alt="press"
            width={1000}
            height={600}
            tabindex="0"
            onClick={(e) => handleChange(e)}
          />
          <Image
            src={data[0]}
            className={style.images}
            alt="press"
            width={1000}
            height={600}
            tabindex="0"
            onClick={(e) => handleChange(e)}
          />
        </div>
      </div>
    </>
  );
};

export default PressComp;
