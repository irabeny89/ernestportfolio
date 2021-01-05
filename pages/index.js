import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../src/components/NavBar'
import { introMsg, eg, index } from '../data/siteData.json'
import { MdWork } from 'react-icons/md'
import styles from '../styles/Home.module.css'

const Home = _ =>
    <>
      <Head>
        <title>Ernest Portfolio</title>
      </Head>

      <div className={styles.home}>
        <Image src={index.imgSrc} width="345" 
          height="180" layout="responsive" />
        <p>{introMsg}</p>
        <p>{eg}</p>
        <h2><MdWork size={40} /> My Expertise</h2>
        <NavBar />
      </div>
    </>

export default Home