import { NextPage } from "next";
import Head from "next/head";

import BackgroundParticles from "../../components/particles/BackgroundParticles";
import Footer from "../../components/footer/Footer";
import Thanks from "../../components/success/success";

const Success: NextPage = () => {
  return (
    <>
      <Head>
        <title>Success</title>
      </Head>
      <div className='flex text-text bg-background flex-col items-center justify-center overflow-x-hidden relative'>
        <Thanks />
        <BackgroundParticles />

        <Footer />
      </div>
    </>
  );
};

export default Success;
