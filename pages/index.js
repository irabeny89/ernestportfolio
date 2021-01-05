import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../src/components/NavBar'
import { examples, index, expertise } from '../data/siteData.json'
import { MdWork } from 'react-icons/md'
import styles from '../styles/Home.module.css'
import Expertise from '../src/components/Expertise'

const Home = _ =>
    <>
      <Head>
        <title>Ernest Portfolio</title>
      </Head>

      <div className={styles.home}>
        <Image alt={index.alt} src={index.imgSrc} width="345" 
          height="180" layout="responsive" />
        <p>{index.p1}</p>
        <h2><MdWork size={40} /> My Expertise</h2>
        <Expertise expertise={expertise} />
        <p>E.g {examples.map(eg => <span key={eg}>{eg}, </span>)}</p>
        <NavBar />
      </div>
    </>

export default Home