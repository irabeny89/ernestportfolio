import Head from 'next/head'
import Image from 'next/image'
import { examples, index, expertise, principles } from '../data/siteData.json'
import { MdWork } from 'react-icons/md'
import styles from '../styles/Home.module.css'
import Expertise from '../src/components/Expertise'
import Navs from '../src/components/Navs'

const Home = _ =>
  <>
    <Head>
      <title>Ernest Portfolio</title>
    </Head>

    <div className={styles.home}>
      <div className={styles.image}>
        <Image alt={index.image.alt} src={index.image.src} width="345"
          height="180" layout="responsive" />
      </div>
      <p className={styles.introParagraph}>{index.p1}</p>
      <div className={styles.main}>
        <div className={styles.details}>
          <h2><MdWork size={33} /> My Expertise</h2>
          <Expertise expertise={expertise} />
          <p><b>Coding principles</b>: {principles.join(', ')}</p>
          <p><b>E.g</b> {examples.join(', ')}</p>
        </div>
        <Navs />
      </div>
    </div>
  </>

export default Home