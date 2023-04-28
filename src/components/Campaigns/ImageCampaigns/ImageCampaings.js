import style from './ImageCampaigns.module.css'
import Image from 'next/image'
import test from '../../../images/pepe.png'
import Link from 'next/link'
export function ImageCampaigns() {



    return (
        <div className={style["container-main"]}>
            <div className={style["container-campaigns"]}>
                <Link href={'/campaigns/name'}>
                    <Image src={test} alt='test' className={style["img"]} />
                    <p>Backtage</p>
                </Link>
                <Link href={'/campaigns/name'}>
                    <Image src={test} alt='test' className={style["img"]} />
                    <p>Backtage</p>
                </Link>
                <Link href={'/campaigns/name'}>
                    <Image src={test} alt='test' className={style["img"]} />
                    <p>Backtage</p>
                </Link>
                <Link href={'/campaigns/name'}>
                    <Image src={test} alt='test' className={style["img"]} />
                    <p>Backtage</p>
                </Link>
                <Link href={'/campaigns/name'}>
                    <Image src={test} alt='test' className={style["img"]} />
                    <p>Backtage</p>
                </Link>

                <Link href={'/campaigns/name'}>
                    <Image src={test} alt='test' className={style["img"]} />
                    <p>Backtage</p>
                </Link>
                <Link href={'/campaigns/name'}>
                    <Image src={test} alt='test' className={style["img"]} />
                    <p>Backtage</p>
                </Link>
                <Link href={'/campaigns/name'}>
                    <Image src={test} alt='test' className={style["img"]} />
                    <p>Backtage</p>
                </Link>
                <Link href={'/campaigns/name'}>
                    <Image src={test} alt='test' className={style["img"]} />
                    <p>Backtage</p>
                </Link>
            </div>
        </div>
    )
}

    

// export function ImageCampaigns({name}){

//     return(
//         <div className={style["container-main"]}>
                // <div className={style["container-campaigns"]}>
                //     <ul>
                //         {name.map((id) => {
                //             return (
                //                 <li key={id}>{id}</li>
                //             )
                //         })}
                //     </ul>
                // </div>
//         </div>
//     )
// }