import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <h1 className='text-xl font-semibold'>Hello World!</h1>
      <div></div>
    </main>
  )
}
