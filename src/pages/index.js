import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Highlights } from '@/components/Home/Highlights/Highlights'
import style from '../styles/index.module.css' 
import Navbar from '@/components/Home/Navbar/Navbar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Head>
        <title>Sole Rubio</title>  
      </Head>
      <Navbar />
    </main>
  )
}
 