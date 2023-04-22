import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from '../components/Home/NavBar/NavBar'



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
 