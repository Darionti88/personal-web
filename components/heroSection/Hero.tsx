import useTyped from "../../hooks/useTyped";
import Link from "next/link";
import OntiCv from "../../assets/Ontiveros_CV.pdf";
import { motion } from "framer-motion";

const job = "React & React Native Developer";

const Hero = () => {
  const typed = useTyped(job);

  return (
    <main id='home' className='relative h-screen w-screen container '>
      <div className='flex flex-col h-full items-center justify-center '>
        <motion.div
          className='h-1/2 flex flex-col items-center pb-9  justify-end'
          initial='hidden'
          animate='visible'
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}>
          <h1 className=' text-5xl lg:text-7xl sm:whitespace-nowrap text-text w-5/6 sm:w-full font-roboto z-20 '>
            {`I'm `}
            <span className='decoration-8 underline decoration-sky-500'>
              Dario Ontiveros
            </span>
          </h1>
        </motion.div>
        <div className='h-1/2 flex flex-col items-center pt-9 '>
          <h5 className='text-4xl text-shadow sm:w-2/3 w-5/6 lg:text-4xl font-roboto z-20 mb-7 blinking-cursor'>
            {typed}
          </h5>
          <p className='lg:text-2xl text-1xl font-roboto sm:w-2/3 w-5/6 z-20'>
            Professional{" "}
            <span className='text-shadow-sky text-4xl'>Team Worker</span>. Ready
            to add value to any project from Day 1.
          </p>
          <Link href={OntiCv} passHref>
            <a
              className='md:w-1/5 w-2/3'
              rel='noreferrer'
              target='_blank'
              download>
              <button
                className={`mt-12  py-4 px-8 rounded-lg text-xl whitespace-nowrap 
          focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-50 
          transition-all bg-indigo-600 hover:bg-indigo-700 text-white hover:scale-105 transform
          `}>
                Download CV
              </button>
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Hero;
