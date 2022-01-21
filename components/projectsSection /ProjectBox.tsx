import Image from "next/image";
import { useState } from "react";
import KeeperImg from "../../assets/images/keeper.png";
import { Project } from "../../interface/CardInterface";

const ProjectBox = ({ name, description, url, github, image }: Project) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div className='relative max-w-md z-10'>
      <div
        className='absolute inset-x-2 inset-y-3 shadow-lg transform bg-gradient-to-r from-primary-salmon100 to-primary-salmon -right-2 -bottom-2 rounded-3xl -z-10
        '></div>
      <div
        className={`w-full shadow-lg z-10 rounded-3xl inside_card relative ${
          clicked && "flipped"
        }`}>
        <div className='abolute w-full h-full overflow-hidden face'>
          <div
            onMouseOver={() => setHover(true)}
            onClick={() => setClicked(!clicked)}
            onMouseOut={() => setHover(false)}
            className={`rounded-xl w-full h-full relative z-50`}>
            <Image
              src={KeeperImg}
              alt='project image'
              className={`rounded-xl ${hover && "visible"}`}
              layout='intrinsic'
            />
            <div
              className={`absolute flex items-center cursor-pointer justify-center 
              top-0 h-full rounded-xl w-full opacity-1 align-center ${
                hover && "click-me"
              }`}>
              {hover && (
                <>
                  <h3 className={`text-4xl font-roboto text-primary-orange  `}>
                    Click
                  </h3>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className={`animate-bounce ml-3 text-primary-orange h-10 w-10 ${
                      clicked && "hidden"
                    }`}
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z'
                    />
                  </svg>
                </>
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
                  href={github}
                  target='_blank'
                  rel='noreferrer'
                  className='font-roboto hover:underline decoration-primary-salmon decoration-4 cursor-pointer  text-xl '>
                  Go to Github Repo
                </a>
              </li>
              <li>
                <a
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
          <div className='bg-background400 w-full h-full flex justify-center items-start py-4 px-5 flex-col space-y-10'>
            <h4 className='text-2xl text-text font-nunito'>Description:</h4>
            <p className='text-text font-roboto text-xl'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;