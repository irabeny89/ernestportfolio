import Head from 'next/head'
import Image from 'next/image'
import { bio, homeImage, principles } from '../data/siteData.json'
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
        <Image alt={homeImage.alt} src={homeImage.src} width="345"
          height="180" layout="responsive" />
      </div><br />
      <p className={styles.introParagraph}>{bio.p1}</p>
      <p className={styles.introParagraph}>{bio.p2}</p><br />
      <div className={styles.main}>
        <div className={styles.details}>
          <h2><MdWork size={33} /> My Expertise</h2>
          <Expertise />
          <p><b>Coding principles</b>: {principles.join(', ')}</p>
        </div>
        <Navs />
      </div>
    </div>
  </>

export default Home