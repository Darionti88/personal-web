import useTyped from "../../hooks/useTyped";

const job = "React & React Native Developer";

const Hero = () => {
  const typed = useTyped(job);
  return (
    <main className='relative h-screen w-full'>
      <div className=' w-full h-full flex flex-col items-center justify-center align-center'>
        <h1 className=' mix-blend-difference text-5xl lg:text-8xl text-text font-roboto z-50 mb-7'>
          {`I'm `}
          <span className='decoration-8 underline decoration-sky-500'>
            Dario Ontiveros
          </span>
        </h1>
        <h5 className='mix-blend-difference w-1/2 text-4xl lg:text-5xl font-roboto z-50 mb-7 blinking-cursor'>
          {typed}
        </h5>
        <p className='lg:text-4xl text-2xl font-roboto w-1/2 z-50 mt-7 px-100'>
          I specialize in Team Work and adding value to any project with a
          proactive approach.
        </p>
      </div>
    </main>
  );
};

export default Hero;
