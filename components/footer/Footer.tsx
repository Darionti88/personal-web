import React from "react";
import Contacts from "../../assets/contacts.json";
import MyContact from "./Contact";

const Footer = () => {
  return (
    <footer
      id='contact'
      className='h-full w-full bg-background400 sm:px-20 space-y-7 py-10 flex flex-col lg:justify-center lg:items-center z-60 '>
      <div className='flex space-x-7'>
        <h1 className='text-2xl self-start font-nunito underline decoration-4 decoration-primary-orange'>
          Contact me at.
        </h1>
        <div>
          <ul className='flex flex-col space-y-5'>
            {Contacts.map((contact) => (
              <MyContact key={contact.contact} {...contact} />
            ))}
          </ul>
        </div>
      </div>
      <h1 className='text-1xl italic self-center'>Copyright Dario Ontiveros</h1>
    </footer>
  );
};

export default Footer;
