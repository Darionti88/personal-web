import React, { useState } from "react";
import { NavState } from "../../interface/NavbarInterface";
import MobileNavbar from "./MobileNavbar";
import Burguer from "./Burguer";
import MobileTransition from "./Transition";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className='w-screen py-3  flex flex-col items-center justify-center'>
      <div className='z-50 flex flex-col container items-center justify-center'>
        <div className='flex items-center w-5/6 justify-between sm:w-full'>
          <h1 className='text-5xl font-roboto cursor-pointer text-text'>
            Onti
          </h1>
          <MobileNavbar />
          <Burguer isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <MobileTransition isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
