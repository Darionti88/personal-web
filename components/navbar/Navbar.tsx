import React, { useState } from "react";
import { NavState } from "../../interface/NavbarInterface";
import MobileNavbar from "./MobileNavbar";
import Burguer from "./Burguer";
import MobileTransition from "./Transition";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className='shadow-sm sticky w-full z-10 '>
      <div className='w-full'>
        <div className='flex items center h-20 w-full'>
          <div className='flex items items-center mx-20 justify-between w-full'>
            <div className='flex justify-center items-center flex-shrink-0'>
              <h1 className='font-bold text-5xl font-nunito cursor-pointer text-text shadow-[1px,2px,1px, bg-orange-300]'>
                Onti
              </h1>
            </div>
            <MobileNavbar />
            <Burguer isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
        <MobileTransition isOpen={isOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
