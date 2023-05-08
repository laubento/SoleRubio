import style from './About.module.css'
import Image from 'next/image'
import Yo from '../../../images/Yo.jpeg'
export function About({data}) {


    return (
        <div className={style["container-main"]}>
            <div className={style["container-about"]}>
                <div className={style.text}>
                    <h1>Yo, Sole</h1>
                    <p>Fashion, advertising y editorial photographer </p>
                    <p>La maravilla de ver la vida a través de un lente es magnificar las pequeñas cosas que nos rodean, inmortalizar el instante perfecto, transmitir emociones, deseos... Me gusta la moda porque ..... Me divierte... Me gusta combinar....Mi vocación es transmitir lo que aprendí..(workshops)</p>
                </div>
                <div className={style["container-img"]}>
                    <Image src={data[0]} alt='yo' className={style.img} width={300} height={300}/>
                </div>
            </div>
        </div>
    )
}