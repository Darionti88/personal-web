import useTyped from "../../hooks/useTyped";
import Link from "next/link";

const thanks = "Thanks!";

const Thanks = () => {
  const typed = useTyped(thanks);

  return (
    <main className='relative h-screen w-screen container '>
      <div className='flex flex-col h-full items-center justify-center '>
        <div className='h-1/2 flex flex-col items-center pb-9  justify-end'>
          <h1 className=' text-5xl lg:text-7xl sm:whitespace-nowrap text-text w-5/6 sm:w-full font-roboto z-20 '>
            <span className='decoration-8 underline decoration-indigo-500'>
              {typed}
            </span>
          </h1>
        </div>
        <div className='h-1/2 flex flex-col items-center pt-9 '>
          <h5 className='text-4xl text-shadow-sky w-5/6 font-roboto z-20 mb-7 '>
            You Succesfully Scheduled an Interview!
          </h5>
          <Link href='/'>
            <a className='md:w-1/5 w-2/3'>
              <button
                className={`mt-12  py-4 px-8 rounded-lg text-xl whitespace-nowrap 
          focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-50 
          transition-all bg-indigo-600 hover:bg-indigo-700 text-white hover:scale-105 transform
          `}>
                Go Home
              </button>
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Thanks;
