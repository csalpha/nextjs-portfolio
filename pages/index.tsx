import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className='bg-gray-900'>
      <Head>
        <title>Next | Digital Transformation</title>
        <meta name='description' content='Digital Transformation' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      {/* Hero */}
      <section id='hero'>
        <Hero />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contacte me */}
    </div>
  );
};

export default Home;
