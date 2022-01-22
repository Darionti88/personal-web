import React from "react";
import { Transition } from "@headlessui/react";
import navbarButtons from "../../assets/navbarbutton.json";
import { Link } from "react-scroll";
import { NavState } from "../../interface/NavbarInterface";

const MobileTransition = ({ isOpen, setIsOpen }: NavState) => {
  return (
    <Transition
      show={isOpen}
      enter='transition ease-out duration-100 transform'
      enterFrom='opacity-0 scale-95'
      enterTo='opacity-100 scale-100'
      leave='transition ease-in duration-75 transform'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-95'>
      {(ref) => (
        <div className=' mt-2 id=mobile-menu'>
          <div
            ref={ref}
            className='w-screen flex flex-col items-center bg-background400 px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {navbarButtons.map((button) => (
              <Link
                href={`/${button.activeClass}`}
                to={button.to}
                onClick={() => setIsOpen(false)}
                activeClass={button.activeClass}
                key={button.id}
                duration={600}
                smooth={true}
                offset={50}
                className='cursor-pointer  hover:text-primary-salmon rounded-md text-text font-semibold px-3 py-2 text-xl'>
                {button.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </Transition>
  );
};

export default MobileTransition;
