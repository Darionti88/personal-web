import { useEffect } from "react";
import Kute from "kute.js";
import { SVGProps } from "react";

const HeroBackground2 = (props: SVGProps<SVGSVGElement>) => {
  useEffect(() => {
    const morphing = Kute.fromTo(
      "#blob1",
      { path: "#blob1" },
      {
        path: "#blob2",
      },

      {
        repeat: 1000,
        duration: 3000,
        yoyo: true,
      }
    );
    morphing.start(200);
  }, []);

  return (
    <div className='svg2'>
      <svg
        id='visual'
        viewBox='0 0 960 540'
        width='960'
        height='540'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        version='1.1'>
        <g transform='translate(496.26292359754433 257.5869917355015)'>
          <path
            id='blob1'
            d='M157.4 -158.8C187.6 -127.3 184.3 -63.6 168.4 -15.9C152.5 31.8 124 63.6 93.8 104.1C63.6 144.6 31.8 193.8 -13.2 207C-58.2 220.2 -116.4 197.4 -156.4 156.9C-196.4 116.4 -218.2 58.2 -211.7 6.5C-205.3 -45.3 -170.5 -90.5 -130.5 -122C-90.5 -153.5 -45.3 -171.3 9.2 -180.4C63.6 -189.6 127.3 -190.3 157.4 -158.8'
            fill='#2F3B56'></path>
        </g>

        <g
          transform='translate(459.6969542833972 307.051472600974)'
          className='hidden'>
          <path
            id='blob2'
            d='M163.3 -152.7C208.3 -118.3 239.2 -59.2 227.5 -11.7C215.8 35.8 161.7 71.7 116.7 94.2C71.7 116.7 35.8 125.8 1.5 124.3C-32.8 122.8 -65.5 110.5 -98.9 88C-132.2 65.5 -166.1 32.8 -181.1 -15C-196 -62.7 -192.1 -125.4 -158.7 -159.7C-125.4 -194.1 -62.7 -200 -1.8 -198.3C59.2 -196.5 118.3 -187 163.3 -152.7'
            fill='#2F3B56'></path>
        </g>
      </svg>
    </div>
  );
};

export default HeroBackground2;
