import React from "react";
import navbarButtons from "../../assets/navbarbutton.json";
import { Link } from "react-scroll";

const MobileNavbar = () => {
  return (
    <div className='hidden md:block'>
      <div className='ml-10 flex items-baseline space-x-4'>
        {navbarButtons.map((button) => (
          <Link
            to={button.to}
            activeClass={button.activeClass}
            key={button.id}
            smooth={true}
            offset={-60}
            className='cursor-pointer hover:text-primary-salmon rounded-md text-text font-semibold px-3 py-2 text-xl'>
            {button.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;
