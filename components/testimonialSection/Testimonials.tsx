import React from "react";
import TestimonialCard from "./TestimonialCard";
import TestimonialsText from "../../assets/testimonials.json";

const Testimonials = () => {
  return (
    <section
      className='h-full px-6 pb-10 mt-12 bg-background400 sm:px-20 mb-4 flex sm:space-y-20 flex-col lg:justify-center lg:items-center'
      id='testimonials'>
      <h1 className='text-7xl self-start font-nunito py-10 underline decoration-8 decoration-primary-orange'>
        What People are Saying...
      </h1>
      <div className='grid xl:grid-cols-4 md:grid-cols-2 gap-12'>
        {TestimonialsText.map((testimonies) => (
          <TestimonialCard key={testimonies.id} {...testimonies} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
