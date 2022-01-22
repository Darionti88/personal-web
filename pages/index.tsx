import { GetStaticProps } from "next";

import Head from "next/head";
import AboutMe from "../components/aboutMe/AboutMe";
import CardSection from "../components/pricingSection/CardSection";
import Hero from "../components/heroSection/Hero";
import Navbar from "../components/navbar/Navbar";
import BackgroundParticles from "../components/particles/BackgroundParticles";
import { ProjectsSection } from "../components/projectsSection /ProjectsSection";
import Testimonials from "../components/testimonialSection/Testimonials";
import Footer from "../components/footer/Footer";
import { NotionResponse } from "../interface/notionResponse";
import { Client } from "@notionhq/client";

const Home = ({ results }: NotionResponse) => {
  return (
    <>
      <Head>
        <title>Onti Web Cv</title>
      </Head>
      <Navbar />
      <div className='flex text-text bg-background flex-col items-center justify-center overflow-x-hidden relative'>
        <BackgroundParticles />
        <Hero />
        <AboutMe />
        <ProjectsSection results={results} />
        <Testimonials />
        <CardSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const database_id: any = process.env.NOTION_PROJECTS_ID;
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = await notion.databases.query({
    database_id,
  });
  return {
    props: {
      results: response.results,
    },
  };
};
