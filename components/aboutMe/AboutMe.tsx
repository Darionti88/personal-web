const AboutMe = () => {
  return (
    <section className='flex flex-col bg-background400 w-screen justify-center items-center'>
      <div
        id='about'
        className='h-full sm:px-20 py-10 mb-10 w-4/5 sm:w-full container'>
        <h1
          className='sm:text-7xl text-5xl self-start font-nunito py-5 underline decoration-8 
      decoration-primary-orange'>
          Who am I?
        </h1>
        <p
          className='xl:text-2xl text-1xl text-grey-400  py-7 
      font-roboto z-20'>
          Hi! 👋 My name is Dario Ontiveros and I come from Buenos Aires,
          Argentina. I am a FullStack Developer, mostly working in Mobile with
          React Native, but I also work with React and Node.Js. 7 years working
          in the 🎥 Movies and Advertising Industry taught me all about working
          in teams, how to lead and how to be led. It gave me a sense of what it
          means to work in projects, defining strategies, establishing deadlines
          and having a common goals.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
