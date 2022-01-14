import React from "react";
import { CheckIcon } from "@heroicons/react/solid";
import { Card } from "../../interface/CardInterface";

const PricingCard = ({ title, price, list, id, popular }: Card) => {
  return (
    <div
      className={`px-6 py-6 bg-gray-100 border-indigo-600 
      rounded-md shadow-xl cursor-pointer flex flex-col items-center relative ${
        popular ? "border-2" : "border border-opacity-10"
      }`}>
      {popular && (
        <span className='bg-indigo-600 text-white px-6 py-1 rounded-full uppercase text-sm font-semibold whitespace-nowrap absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          Most Popular
        </span>
      )}
      <div className='px-10 py-4 flex flex-row'>
        <h3 className='text-3xl'>{title}</h3>
      </div>
      <div className='px-10 py-4 flex flex-row items-center'>
        <div className='flex items-start '>
          <p className='font-medium text-4xl'>€</p>
          <h4 className='lg:text-5xl xl:text-7xl text-5xl font-semibold whitespace-nowrap'>
            {price}
          </h4>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='px-10 py-4 whitespace-nowrap'>
          <p className='text-gray-500 italic'>Features:</p>
        </div>
        <div className='py-4'>
          <ul className='space-y-3'>
            {list === list &&
              list.map((feat) => (
                <li key={id} className='flex items-center space-x-4'>
                  <CheckIcon className='w-6 h-6 text-green-500 flex-shrink-0' />
                  <p className='text-xl'>{feat}</p>
                </li>
              ))}
          </ul>
          <button
            className={`mt-12 w-full py-4 px-8 rounded-lg text-lg whitespace-nowrap 
          focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-50 
          transition-all ${
            popular
              ? "bg-indigo-600 hover:bg-indigo-700 text-white hover:scale-105 transform"
              : "bg-white text-indigo-600 hover:bg-gray-50"
          }`}>
            Schedule Meet
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
