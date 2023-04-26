import Budget from "@/components/Home/Contact/Form";
import Contact from "@/components/Home/Contact/Contact";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Highlights } from "@/components/Home/Highlights/Highlights";
import { Footer } from "@/components/Footer/Footer";
import { Extras } from "@/components/Extras/Extras";
import { Slider } from "@/components/Home/Slider/Slider";
import style from "../styles/index.module.css";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Head>
        <title>Sole Rubio</title>
      </Head>

      <div>
        <Slider />
      </div>

      <div className={style["container-highlights"]}>
        <Extras props={"line"} />
        <Highlights />
        <Extras props={"line"} />
      </div>
      <div className={style["container-highlights"]}>
        <Contact />
      </div>

      {/* <div>
        <Footer />
      </div> */}
    </main>
  );
}
