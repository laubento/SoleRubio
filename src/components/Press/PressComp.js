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

  return (
    <>
      {modalState && (
        <div className={style.overlay} onClick={(e) => setModalState(false)}>
          <CiCircleRemove
            className={style.buttonRemove}
            onClick={(e) => setModalState(false)}
          />
          <div>
            <Image
              src={data[index]}
              alt="press"
              className={style.totalImage}
              width={1000}
              height={1000}
            />
          </div>
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
            onClick={(e) => setModalState(true) && setIndex(2)}
          />
          <Image
            src={data[2]}
            className={style.images}
            alt="press"
            width={1000}
            height={1000}
          />
          <Image
            src={data[2]}
            className={style.images}
            alt="press"
            width={1000}
            height={600}
          />
          <Image
            src={data[0]}
            className={style.images}
            alt="press"
            width={1000}
            height={600}
          />
          <Image
            src={data[0]}
            className={style.images}
            alt="press"
            width={1000}
            height={600}
          />
          <Image
            src={data[2]}
            className={style.images}
            alt="press"
            width={1000}
            height={600}
          />
          <Image
            src={data[0]}
            className={style.images}
            alt="press"
            width={1000}
            height={600}
          />
          <Image
            src={data[1]}
            className={style.images}
            alt="press"
            width={1000}
            height={1000}
          />
          <Image
            src={data[2]}
            className={style.images}
            alt="press"
            width={1000}
            height={600}
          />
          <Image
            src={data[0]}
            className={style.images}
            alt="press"
            width={1000}
            height={600}
          />

          {/* <Image src={img2} className={style.images} alt="press" />
          <Image src={img3} className={style.images} alt="press" />
          <Image src={img} className={style.images} alt="press" />
          <Image src={img2} className={style.images} alt="press" />
          <Image src={img3} className={style.images} alt="press" />
          <Image src={img} className={style.images} alt="press" /> */}
        </div>
      </div>
    </>
  );
};

export default PressComp;
