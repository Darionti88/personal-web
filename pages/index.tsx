import type { NextPage } from "next";
import Head from "next/head";
import CardSection from "../components/cardSection/CardSection";

const Home: NextPage = () => {
  return (
    <div className='w-full h-full  flex flex-col items-center justify-center'>
      <Head>
        <title>Onti Web Cv</title>
        <meta name='description' content={`Dario Ontiveros's web portfolio`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <CardSection />
    </div>
  );
};

export default Home;
