import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import About from "../components/About";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Next | Digital Transformation</title>
        <meta name='description' content='Digital Transformation' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contacte me */}
    </div>
  );
};

export default Home;
