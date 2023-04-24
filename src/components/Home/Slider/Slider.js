import style from './Slider.module.css'
import Image from 'next/image'
import slides from '../../../images/Slides.jpg'
import slides2 from '../../../images/Slides2.jpg'


export function Slider() {

    return (
        <div className={style["container-main"]}>
            <div className={style['container-backgroud']}>
                <Image src={slides} id={style['IMG']} alt='slides' className={style['image-backgroud-one']}/>
                <Image src={slides2} id={style['IMG']} alt='slides' className={style['image-backgroud-two']}/>
                <div className={style["container-slider"]}>
                    <Image src={slides} id={style['IMG']} alt='slides' className={style['image-slide-one']}/>
                    <Image src={slides2} id={style['IMG']} alt='slides' className={style['image-slide-two']}/>
                </div>
            </div>
                
        </div>
    )
}