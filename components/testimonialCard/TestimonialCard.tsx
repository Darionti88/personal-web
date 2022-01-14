import React from "react";
import Image from "next/image";
import { Testimonial } from "../../interface/CardInterface";
import Stars from "../Stars/Stars";

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
    // <div className='flex items-center justify-center px-5 py-5'>
    //   <div
    //     className='w-full mx-auto max-w-xl rounded-lg bg-gray-100
    //   shadow-lg px-5 pt-5 pb-10 text-gray-800'>
    //     <div className='w-full pt-1 text-center pb-5 -mt-16 mx-auto'>
    //       <a href={external_url} className='block relative'>
    //         <Image
    //           height={100}
    //           width={100}
    //           alt='avatar'
    //           src={photo}
    //           className='mx-auto object-cover rounded-full'
    //         />
    //       </a>
    //     </div>
    //     <div className='w-full mb-10'>
    //       <div className='text-3xl text-indigo-500 text-left leading-tight h-3'>
    //         “
    //       </div>
    //       <p className='text-sm text-gray-700  text-center px-5'>
    //         {testimonial}
    //       </p>
    //       <div className='text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3'>
    //         ”
    //       </div>
    //     </div>
    //     <div className='w-full'>
    //       <p className='text-md text-indigo-500 font-bold text-center'>
    //         {name}
    //       </p>
    //       <p className='text-xs text-gray-500 text-center'>{job}</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default TestimonialCard;
