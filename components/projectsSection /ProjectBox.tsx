import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Project } from "../../interface/CardInterface";

const ProjectBox = ({ name, description, url, github, image }: Project) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div className='relative w-full sm:w-3/4 h-96 z-10'>
      <div
        className={`absolute inset-x-2 inset-y-3 transform bg-gradient-to-r 
        from-sky-700 to-sky-500 -right-3 inside_card -bottom-4 rounded-3xl -z-10 ${
          clicked && "flipped"
        }`}
      />
      <div
        className={`w-full shadow-lg z-10 rounded-3xl inside_card relative 
        ${clicked && "flipped"}
        `}>
        <div className='w-full h-full overflow-hidden space-y-2 face'>
          <div
            onMouseOver={() => setHover(true)}
            onClick={() => setClicked(!clicked)}
            onMouseOut={() => setHover(false)}
            className={`rounded-xl w-full h-64 relative z-50`}>
            <Image
              src={image}
              alt='project image'
              objectFit='fill'
              className={`rounded-xl bg-red-300 ${hover && "visible"}`}
              layout='fill'
              priority
            />
            <div
              className={`absolute flex items-center cursor-pointer justify-center 
              top-0 h-full rounded-xl w-full opacity-1 align-center ${
                hover && "click-me"
              }`}>
              {hover && (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-10 w-10 text-primary-orange animate-ping'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122'
                  />
                </svg>
              )}
            </div>
          </div>
          <div className='px-6 py-4 bg-background400 z-50 rounded-3xl'>
            <div className='font-bold text-primary-orange font-nunito text-2xl mb-2 z-50'>
              {name}
            </div>
            <ul>
              <li className='text-text text-xl'>
                <a
                  /* @ts-ignore */
                  href={github}
                  target='_blank'
                  rel='noreferrer'
                  className='font-roboto hover:underline decoration-primary-salmon decoration-4 cursor-pointer  text-xl '>
                  Go to Github Repo
                </a>
              </li>
              <li>
                <a
                  /* @ts-ignore */
                  href={url}
                  target='_blank'
                  rel='noreferrer'
                  className='font-roboto hover:underline decoration-4 decoration-indigo-600 cursor-pointer text-xl '>
                  Go to Page
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          onClick={() => setClicked(!clicked)}
          className='face-back face cursor-pointer w-full h-full absolute top-0 rounded-3xl overflow-hidden z-10'>
          <div
            className='bg-sky-900 w-full h-full flex justify-center 
          items-start py-4 px-5 flex-col'>
            <p className='text-text font-roboto text-xl'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
