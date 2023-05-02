/* eslint-disable @next/next/no-sync-scripts */

import dotenv from 'dotenv'
import Image from "next/image";
import style from '../../styles/campaigns.module.css'
import { NameCampaigns } from '@/components/Campaigns/NameCampaigns/NameCampaigns';
import Head from 'next/head';

export default function Campaign({ data, name }) {

    let util = [{ name }, { name: 'dsadsadsa fsdfsa' }]

    let num = Math.floor(data.length / 4) * 4
    console.log(data.length)
    console.log(num)

    return (

        <div className={style["id-container-main"]}>

            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            </Head>

            <div className={style["container-campaigns"]}>
                <NameCampaigns data={util} />




                <div className={style["id-container-images"]}>
                    <h4>{name}</h4>

                    {data.map((el, i) => {
                        console.log('aaa ' + i)

                        if(num <= i){
                            return
                        }
                        else if (i === 0 || i % 4 === 0) {
                            return (
                                <div key={i} id={style["kiko-slider"]}>

                                    <ul class={style["slider"]}>
                                        <li id={"slide" + (i + 1)}>
                                            <Image src={data[i+1]} alt='pepe' width={300} height={300} />
                                        </li>
                                        <li id={"slide" + (i + 2)}>
                                            <Image src={data[i+2]} alt='pepe' width={300} height={300} />
                                        </li>
                                        <li id={"slide" + (i + 3)}>
                                            <Image src={data[i+3]} alt='pepe' width={300} height={300} />
                                        </li>
                                        <li id={"slide" + (i + 4)}>
                                            <Image src={data[i+4]} alt='pepe' width={300} height={300} />
                                        </li>
                                    </ul>

                                    <ul class="menu">
                                        <li>
                                            <a href={"#slide" + (i + 1)}>1</a>
                                        </li>
                                        <li>
                                            <a href={"#slide" + (i + 2)}>2</a>
                                        </li>
                                        <li>
                                            <a href={"#slide" + (i + 3)}>3</a>
                                        </li>
                                        <li>
                                            <a href={"#slide" + (i + 4)}>4</a>
                                        </li>
                                    </ul>

                                </div>
                            )
                    }



                    })}





                    <div style={{ display: "none" }}>
                        <a href="https://kikopalomares.com/" target="_blank">Powered by Kiko Palomares</a>
                    </div>

                    {/* <div className={style["images"]}>
                        {data.map((el) => {
                            return (
                                <Image key={el} src={el} alt={'Foto'} width={300} height={300} />
                            )
                        })}
                    </div> */}

                    {/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                        </ol>
                        <div class="carousel-inner">
                            {data.map((el, i) => {
                                return(
                                    <div key={el} class={i === 1 ? "carousel-item active" : "carousel-item "}>
                                        <Image  class="d-block w-100" src={el} alt="First slide" width={300} height={300} />
                                    </div> 
                                )
                            })}
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div> */}
                </div>


            </div>
        </div>
    )
}


export async function getStaticPaths() {
    dotenv.config();
    const name = process.env.CLOUD_NAME;
    const key = process.env.CLOUD_KEY;
    const secret = process.env.CLOUD_SECRET
    let info = ''

    await fetch(`https://api.cloudinary.com/v1_1/${name}/resources/image?max_results=500`, {
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + btoa(`${key}:${secret}`)
        }
    })
        .then(response => response.json())
        .then((data) => { return (info = data) })
        .catch(error => console.error('aaaa' + error))

    const found = info.resources.map(el => el.folder)
    const newfound = found.filter((value, index) => {
        return found.indexOf(value) === index;
    });

    const newName = newfound.map((el) => {
        let split = el.split('/')
        let separate = split[1].split(' ')
        let complete = separate.join('_')
        return complete
    })

    const paths = newName.map((el) => ({
        params: { id: el }
    }))
    // const paths = [{
    //     params: {id: 'el'}
    // }]
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    dotenv.config();
    const name = process.env.CLOUD_NAME;
    const key = process.env.CLOUD_KEY;
    const secret = process.env.CLOUD_SECRET

    let dataComplete = ''

    let nameFound = params.id.split('_')
    let info = 'Sole Rubio/' + nameFound.join(' ')


    await fetch(`https://api.cloudinary.com/v1_1/${name}/resources/image?max_results=500`, {
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + btoa(`${key}:${secret}`)
        }
    })
        .then(response => response.json())
        .then((data) => {
            let dataActualice = data.resources.map((el) => {
                return el.folder === info && el.url
            })
            dataActualice = dataActualice.filter(el => el !== false)
            return dataComplete = dataActualice
        })
        .catch(error => console.error(error))

    return {
        props: {
            data: dataComplete,
            name: nameFound.join(' ')
        }
    }
}
