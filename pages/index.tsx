import type { NextPage } from "next";
import Head from "next/head";
import AboutMe from "../components/aboutMe/AboutMe";
import CardSection from "../components/cardSection/CardSection";
import Hero from "../components/heroSection/Hero";
import Navbar from "../components/navbar/Navbar";
import BackgroundParticles from "../components/particles/BackgroundParticles";
import Testimonials from "../components/testimonialSection/Testimonials";

const Home: NextPage = () => {
  return (
    <div className='flex dark:text-text bg-background flex-col items-center justify-center overflow-x-hidden relative'>
      <Navbar />
      <Head>
        <title>Onti Web Cv</title>
      </Head>
      <BackgroundParticles />
      <Hero />
      <AboutMe />
      <Testimonials />
      <CardSection />
    </div>
  );
};

export default Home;
