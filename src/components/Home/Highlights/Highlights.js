import React from "react";
import style from './Highlights.module.css'
import img from '../../../images/pepe.png'
import Image from "next/image";
import Link from "next/link";

export function Highlights() {



    return (
        <div>
            <h2 className={style.titulo}>DESTACADAS</h2>
            <div className={style["container-main"]}>
                <div className={style["container-highlights"]}>
                    {/* <div className={style["container"]}> */}
                        <Link href={'/campains/one'} className={style["container"]}>
                            <Image className={style["img-config"]} src={img} alt="1" responsive="true" />
                            <div className={style.hover}>
                                <h5>REVISTA PARA TI</h5>
                            </div>
                        </Link>
                    {/* </div> */}
                    <Link href={'/campains/two'} className={style["container"]}>
                        <Image className={style["img-config"]} src={img} alt="1" />
                        <div className={style.hover}>
                            <h5>E-MAGAZINE</h5>
                        </div>
                    </Link>
                    <Link href={'/campains/three'} className={style["container"]}>
                        <Image className={style["img-config"]} src={img} alt="1" />
                        <div className={style.hover}>
                            <h5>E-MAGAZINE</h5>
                        </div>
                    </Link>
                    <Link href={'/campains/four'} className={style["container"]}>
                        <Image className={style["img-config"]} src={img} alt="1" />
                        <div className={style.hover}>
                            <h5>E-MAGAZINE</h5>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={style["see-more"]}>
                <Link href={"/campains"} className={style.link} >
                    <h3>Ver mas</h3>
                </Link>
            </div>
        </div>
    )

}