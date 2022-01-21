import React from "react";
import { Contact } from "../../interface/CardInterface";

const MyContact = ({ contact, url, content }: Contact) => {
  return (
    <li>
      <span className='text-2xl underline  decoration-4 decoration-sky-500 font-nunito'>
        {contact}
      </span>
      <a className='font-roboto text-2xl' href={url}>
        {content}
      </a>
    </li>
  );
};

export default MyContact;
