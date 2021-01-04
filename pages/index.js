import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../src/components/NavBar'
import { introMsg, eg, index } from '../data/siteData.json'
import { MdWork } from 'react-icons/md'
import styles from '../styles/Home.module.css'

const Home = _ =>
  <div className={styles.home}>
    <Head>
      <title>Ernest Portfolio</title>
    </Head>

    <Image src={index.src} width="345" 
      height="180" layout="responsive" />
    <p>{introMsg}</p>
    <p>{eg}</p>
    <h1><MdWork size={40} /> My Expertise</h1>
    <NavBar />
  </div>

export default Home