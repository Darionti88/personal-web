import React from "react";
import Image from "next/image";
import { Testimonial } from "../../interface/CardInterface";
import Stars from "./Stars";

const TestimonialCard = ({
  external_url,
  id,
  job,
  name,
  photo,
  testimonial,
}: Testimonial) => {
  return (
    <div className='relative  sm:mb-12'>
      <div className='absolute inset-0 shadow-lg transform bg-gradient-to-r from-indigo-400 to-indigo-600 -rotate-6 rounded-3xl'></div>
      <div className='bg-white border border-1 p-10 relative shadow-md rounded-3xl dark:bg-dark-300'>
        <div className='-mt-24 flex-col flex items-center mb-5 relative z-10'>
          <a href={external_url} className='block relative'>
            <Image
              height={100}
              width={100}
              alt='avatar'
              src={photo}
              className='mx-auto object-cover rounded-full'
            />
          </a>
          <p className='antialiased font-semibold mb-0 mt-2 text-base text-black-dark'>
            {name}
          </p>
          <p className='antialiased font-medium text-gray-500 text-sm italic'>
            {job}
          </p>
        </div>
        <div className='text-3xl text-indigo-500 text-left leading-tight h-3'>
          “
        </div>
        <p className='antialiased mb-8 text-black text-center px-5 line-clamp-3'>
          {testimonial}
        </p>
        <div className='text-3xl text-indigo-500 text-right leading-tight -mt-4'>
          ”
        </div>
        <div className='flex flex-row'>
          <Stars />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
