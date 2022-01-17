import React, { Dispatch, SetStateAction } from "react";
import { NavState } from "../../interface/NavbarInterface";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Burguer = ({ isOpen, setIsOpen }: NavState) => {
  return (
    <div className='mr-10 flex md:hidden'>
      <button
        type='button'
        className=' bg-background400 inline-flex items-center justify-center p-2 w-10 h-10 rounded-md text-text hover:bg-blue-600 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white'
        aria-controls='mobile-menu'
        aria-expanded='false'
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <XIcon className='w-6 h-6 text-text flex-shrink-0' />
        ) : (
          <MenuIcon className='w-6 h-6 text-text flex-shrink-0 z-50' />
        )}
      </button>
    </div>
  );
};

export default Burguer;
