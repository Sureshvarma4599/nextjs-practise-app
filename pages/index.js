import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from "../components/header/header"
import Intro from "../components/introduction/introduction"
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>3D Usher</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Intro/>

    </div>
  )
}
