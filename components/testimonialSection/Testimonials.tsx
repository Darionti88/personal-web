import React from "react";
import TestimonialCard from "../testimonialCard/TestimonialCard";
import TestimonialsText from "../../assets/testimonials.json";

const Testimonials = () => {
  return (
    <section
      className='h-full px-6 sm:px-20 mb-4 flex lg:justify-center lg:items-center'
      id='testimonials'>
      <div className='grid xl:grid-cols-4 md:grid-cols-2 gap-12'>
        {TestimonialsText.map((testimonies) => (
          <TestimonialCard key={testimonies.id} {...testimonies} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
