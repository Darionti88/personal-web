import type { NextPage } from "next";
import Head from "next/head";
import AboutMe from "../components/aboutMe/AboutMe";
import CardSection from "../components/cardSection/CardSection";
import Hero from "../components/heroSection/Hero";
import Testimonials from "../components/testimonialSection/Testimonials";

const Home: NextPage = () => {
  return (
    <div className='flex dark:text-text bg-background flex-col items-center justify-center py-10'>
      <Head>
        <title>Onti Web Cv</title>
      </Head>
      <Hero />
      <AboutMe />
      <Testimonials />
      <CardSection />
    </div>
  );
};

export default Home;
