import React from "react";
import style from './Highlights.module.css'
import img from '../../../images/pepe.png'
import Image from "next/image";

export function Highlights() {



    return (
        <div className={style["container-main"]}>
            {/* <h2 className={style.titulo}>Destacadas</h2> */}
            <div className={style["container-highlights"]}>
                <div className={style["container"]}>
                    <Image className={style["img-config"]} src={img} alt="1" responsive="true"/>
                    <p>Imagen 1</p>
                    <div className={style.hover}>
                        <h5>REVISTA PARA TI</h5>
                    </div>
                </div>
                <div className={style["container"]}>
                    <Image className={style["img-config"]} src={img} alt="1"/>
                    <p>Imagen 2</p>
                    <div className={style.hover}>
                        <h5>E-MAGAZINE</h5>
                    </div>
                </div>
                <div className={style["container"]}>
                    <Image className={style["img-config"]} src={img} alt="1" />
                    <p>Imagen 3</p>
                    <div className={style.hover}>
                        <h5>E-MAGAZINE</h5>
                    </div>
                </div>
                <div className={style["container"]}>
                    <Image className={style["img-config"]} src={img} alt="1"/>
                    <p>Imagen 4</p>
                    <div className={style.hover}>
                        <h5>E-MAGAZINE</h5>
                    </div>
                </div>
            </div>
        </div>
    )

}