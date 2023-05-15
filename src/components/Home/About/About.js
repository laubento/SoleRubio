/* eslint-disable react/no-unescaped-entities */
import style from './About.module.css'
import Image from 'next/image'
import Yo from '../../../images/Yo.jpeg'
export function About({data}) {


    return (
        <div className={style["container-main"]}>
            <div className={style["container-about"]}>
                <div className={style.text}>
                    <h1>Yo, Sole</h1>
                    <p>¡Hola! Soy Sole Rubio, una fotógrafa y productora de campañas reconocidas internacional y nacionalmente. Me consideran una <strong>"Fotógrafa de élite"</strong> por mi trabajo con estrellas de la farándula argentina. Empecé mi carrera hace 14 años después de estudiar relaciones públicas. Viví 2 años en <strong>Estados Unidos</strong> y realicé capacitaciones de fotografía en <strong>New York</strong> y <strong>San Francisco</strong>. Regrese a la Argentina para seguir profecionalizandome con Aldo Bressi y Alfredo Willimburg en <strong>FotoClub Ba</strong>.</p>
                    <p>Trabajo con grandes marcas reconocidas internacionalmente como <strong>Pantene, Sedal, Gillette, OralB, Panasonic, Jumbo y Turner</strong>, entre otras mas. También he trabajado para muchas revistas de moda, incluyendo <strong>Para Ti, Hola, Gente, Caras, Caras Moda, revista Luz, Mustique, Eve Magazine, Polo y Polistas, Para Teens</strong>, y muchas más.</p>
                    <p>No solo eso, mi trabajo me impulsa a ser fotógrafa de celebridades tales como <strong>China Suarez, Marcela Kloosterboer, Lali Esposito, Sofia Jujuy, Pampita, Viviana Canosa, Mariano Martinez, Rocio Girao Diaz, Julian Serrano, Malena Narvay, Pico Monaco, Grego Rossello, Julieta Pransi, Luli Fernandez, Mery del Cerro</strong>, entre muchos más. </p>
                    <p><strong>Mis fotos hablan por sí solas</strong>: son imágenes fuertes con una estética impecable, una iluminación que hace que la fotografía sea perfecta y limpia. Individualmente, estas cosas no son nada, <strong>pero mi ojo es quien las une obteniendo un resultado de alta calidad que atrapa</strong>.</p>
                    <p>Recientemente, fui nominada como <strong>Mejor Fotografía de Moda</strong> en los <strong>Martin Fierro</strong> de la Moda, llevados a cabo en Buenos Aires. Estoy muy orgullosa de este logro y espero seguir creciendo y mejorando en mi carrera como fotógrafa y productora de campañas.</p>
                </div>
                <div className={style["container-img"]}>
                    <Image src={data[0]} alt='yo' className={style.img} width={400} height={400}/>
                </div>
            </div>
        </div>
    )
}