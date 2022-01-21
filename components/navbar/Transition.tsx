import React from "react";
import { Transition } from "@headlessui/react";
import navbarButtons from "../../assets/navbarbutton.json";
import { Link } from "react-scroll";

interface Props {
  isOpen: boolean;
}

const MobileTransition = ({ isOpen }: Props) => {
  return (
    <Transition
      show={isOpen}
      enter='transition easte-out duration-100 transform'
      enterFrom='opacity-0 scale-95'
      enterTo='opacity-100 scale-100'
      leave='transition ease-in duration-75 transform'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-95'>
      {(ref) => (
        <div className='md:hidden id=mobile-menu'>
          <div
            ref={ref}
            className=' flex flex-col bg-background400 px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {navbarButtons.map((button) => (
              <Link
                href={`/${button.activeClass}`}
                to={button.to}
                activeClass={button.activeClass}
                key={button.id}
                smooth={true}
                offset={50}
                className='cursor-pointer  hover:bg-primary-orange rounded-md text-text font-semibold px-3 py-2 text-xl'>
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
