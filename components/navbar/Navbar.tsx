import React, { useState } from "react";
import { Link } from "react-scroll";
import MobileNavbar from "./MobileNavbar";
import Burguer from "./Burguer";
import MobileTransition from "./Transition";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className=' bg-black w-screen flex flex-col  items-center justify-center'>
      <div className='z-50 flex fixed top-0 py-3  flex-col container items-center justify-center'>
        <div className='flex items-center w-5/6 justify-between sm:w-full'>
          <div className='flex items-center justify-center space-x-2 underline decoration-primary-orange'>
            <Link to='home' smooth={true}>
              <h1 className='text-5xl font-roboto cursor-pointer text-text'>
                Onti
              </h1>
            </Link>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-9 w-9'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
              />
            </svg>
          </div>
          <MobileNavbar />
          <Burguer isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <MobileTransition isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
