import Budget from "@/components/Home/Contact/Form";
import Contact from "@/components/Home/Contact/Contact";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Highlights } from "@/components/Home/Highlights/Highlights";
import { Extras } from "@/components/Extras/Extras";
import { Slider } from "@/components/Home/Slider/Slider";
import { About } from "@/components/Home/About/About";
import style from "../styles/index.module.css";
import dotenv from 'dotenv';
const inter = Inter({ subsets: ["latin"] });

export default function Home({data}) {

  return (
    <main>
      <Head>
        <title>Sole Rubio</title>
      </Head>

      <div>
        <Slider data={data.Slider}/>
      </div>

      <div>
        <Extras props={"line"} />
        <About />
      </div>

      <div className={style["container-highlights"]}>
        <Extras props={"line"} />
        <Highlights data={data.Highlights}/>
        <Extras props={"line"} />
      </div>
      <div className={style["container-contact"]}>
        <Contact />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  dotenv.config();
  const name = process.env.CLOUD_NAME;
  const key = process.env.CLOUD_KEY;
  const secret = process.env.CLOUD_SECRET
  let info = {}

  await fetch(`https://api.cloudinary.com/v1_1/${name}/resources/image/upload?prefix=Inicio/&max_results=500`, {
      method: 'GET',
      headers: {
          'Authorization': 'Basic ' + btoa(`${key}:${secret}`)
      }
  })
      .then(response => response.json())
      .then((data) => {
          let Slider = []
          let About = []
          let Highlights = []
          data.resources.forEach(item => {
            let name = item.folder.split('/') 
            let nameHighlightsArray = []
            let nameHighlights = []
            name[1] === 'Destacadas' ? nameHighlightsArray = item.public_id.split('/') : null
            name[1] === 'Destacadas' ? nameHighlights = nameHighlightsArray[2].split('_') : null
            name[1] === 'Destacadas' ? nameHighlights.pop() : null
            name[1] === 'Destacadas' ? Highlights.push({url: item.url, name: nameHighlights.join(' ')}) : null
            name[1] === 'About' ? About.push(item.url) : null
            name[1] === 'Slider' ? Slider.push(item.url) : null
          })
          let destacada = {Slider: Slider, About: About, Highlights: Highlights}
          return info = destacada
      })
      .catch(error => console.error(error))

  return {
      props: {
          data: info
      }
  }
}