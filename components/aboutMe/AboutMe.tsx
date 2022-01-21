const AboutMe = () => {
  return (
    <section
      id='about'
      className='h-full bg-background400 sm:px-20 py-10 flex flex-col mb-10 lg:justify-center lg:items-center '>
      <h1 className='text-7xl self-start font-nunito py-5 underline decoration-8 decoration-primary-orange'>
        Who am I?
      </h1>
      <p className='xl:text-2xl text-grey-400 sm:w-2/3 mix-blend-difference py-7 font-roboto z-50'>
        Hi! My name is Dario Ontiveros and I come from Buenos Aires, Argentina.
        👋 I am a FullStack Developer, mostly working in Mobile with React
        Native, but I have worked with React.Js and Node.Js I have 7 years of
        experience working in the 🎥 Movies and Advertising Industry. This
        taught me all about working in teams, how to lead and how to be led. It
        gave me a sense of what it means to work in projects, defining
        strategies, establishing deadlines and having a common goal.
      </p>
    </section>
  );
};

export default AboutMe;
