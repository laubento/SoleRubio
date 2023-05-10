import React from "react";
import style from './Highlights.module.css'
import img from '../../../images/pepe.png'
import Image from "next/image";
import Link from "next/link";


export function Highlights({ data }) {


    return (
        <div>
            <h2 className={style.titulo}>DESTACADAS</h2>
            <div className={style["container-main"]}>
                <div className={style["container-highlights"]}>
                    <Link href={`/campains/${data[0].name.split(' ').join('_')}`} className={style["container"]}>
                        <Image className={style["img-config"]} src={data[0].url} alt="1" width={1000} height={1000} />
                        <div className={style.hover}>
                            <h5>{data[0].name}</h5>
                        </div>
                    </Link>
                    <Link href={`/campains/${data[1].name.split(' ').join('_')}`} className={style["container"]}>
                        <Image className={style["img-config"]} src={data[1].url} alt="1" width={300} height={300} />
                        <div className={style.hover}>
                            <h5>{data[1].name}</h5>
                        </div>
                    </Link>
                    <Link href={`/campains/${data[2].name.split(' ').join('_')}`} className={style["container"]}>
                        <Image className={style["img-config"]} src={data[2].url} alt="1" width={300} height={300} />
                        <div className={style.hover}>
                            <h5>{data[2].name}</h5>
                        </div>
                    </Link>
                    <Link href={`/campains/${data[3].name.split(' ').join('_')}`} className={style["container"]}>
                        <Image className={style["img-config"]} src={data[3].url} alt="1" width={300} height={300} />
                        <div className={style.hover}>
                            <h5>{data[3].name}</h5>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={style["see-more"]}>
                <Link href={"/campaigns"} className={style.link} >
                    <h3>Ver mas</h3>
                </Link>
            </div>
        </div>
    )

}
