import React from "react";
import TestimonialCard from "./TestimonialCard";
import TestimonialsText from "../../assets/testimonials.json";

const Testimonials = () => {
  return (
    <section
      id='testimonials'
      className='flex flex-col bg-background400 w-screen justify-center items-center'>
      <div className='h-full py-10 mb-10 w-5/6 flex flex-col space-y-12 container'>
        <h1 className='sm:text-7xl text-5xl self-start mb-6 font-nunito py-5 underline decoration-8 decoration-primary-salmon'>
          What People are Saying...
        </h1>
        <div className='grid xl:grid-cols-4 md:grid-cols-2 gap-y-20 sm:gap-12'>
          {TestimonialsText.map((testimonies) => (
            <TestimonialCard key={testimonies.id} {...testimonies} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
