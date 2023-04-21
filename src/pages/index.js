import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Highlights } from '@/components/Home/Highlights/Highlights'
import { Footer } from '@/components/Home/Footer/Footer'
import style from '../styles/index.module.css' 
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Head>
        <title>Sole Rubio</title>
      </Head>

      {/* Highlights ready for the use, response: ok . TODO: Make response title*/}
      <div className={style["container-highlights"]}>
        <Highlights />
      </div>

      <div>
        <Footer />
      </div>

    </main>
  )
}
 