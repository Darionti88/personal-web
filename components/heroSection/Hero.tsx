import useTyped from "../../hooks/useTyped";

const job = "React & React Native Developer";

const Hero = () => {
  const typed = useTyped(job);
  return (
    <main id='home' className='relative h-screen w-screen container '>
      <div className='flex flex-col h-full items-center space-y-12 justify-center'>
        <h1 className=' text-5xl lg:text-7xl text-text sm:w-2/3 w-5/6 font-roboto z-20 mb-7'>
          {`I'm `}
          <span className='decoration-8 underline decoration-sky-500'>
            Dario Ontiveros
          </span>
        </h1>
        <h5 className='text-4xl text-shadow sm:w-2/3 w-5/6 lg:text-4xl font-roboto z-20 mb-7 blinking-cursor'>
          {typed}
        </h5>
        <p className='lg:text-2xl text-1xl font-roboto sm:w-2/3 w-5/6 z-20 mt-7'>
          Professional{" "}
          <span className='text-shadow-sky text-4xl'>Team Worker</span>. Ready
          to add value to any project from Day 1.
        </p>
      </div>
    </main>
  );
};

export default Hero;
