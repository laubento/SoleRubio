import style from "./PressComp.module.css";
import Image from "next/image";
import { CiCircleRemove } from "react-icons/ci";

import React, { useState } from "react";

const PressComp = ({ data }) => {
  const [modalState, setModalState] = useState(false);
  const [image, setImage] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    let src = e.target.src;
    let urlModal = src.substring(src.indexOf("/_next"));
    setImage(urlModal);
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
          {data &&
            data.map((el, index) => {
              return (
                <Image
                  key={index}
                  src={el}
                  className={style.images}
                  alt="press"
                  width={1000}
                  height={1000}
                  tabIndex="0"
                  onClick={(e) => handleChange(e)}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default PressComp;
