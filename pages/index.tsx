import Head from "next/head";
import Intro from "../components/Intro";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <Head>
        <title>Ernest Portfolio</title>
      </Head>
      <div className="pt-5 mt-5" style={{minWidth: "450px"}}>
        <Intro />
        <Projects />
      </div>
    </>
  );
};

export default Home;
