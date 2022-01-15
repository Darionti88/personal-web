import { useEffect } from "react";
import Kute from "kute.js";
import { SVGProps } from "react";

const HeroBackground = (props: SVGProps<SVGSVGElement>) => {
  useEffect(() => {
    const morphing = Kute.fromTo(
      "#blob1",
      { path: "#blob1" },
      {
        path: "#blob4",
      },

      {
        repeat: 1000,
        duration: 3000,
        yoyo: true,
      }
    );
    morphing.start(100);
  }, []);

  return (
    <div className='svg'>
      <svg
        id='visual'
        viewBox='0 0 960 540'
        width='960'
        height='540'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        version='1.1'>
        <g transform='translate(479.66227516536105 276.3367925274457)'>
          <path
            id='blob1'
            d='M106.1 -96C148.6 -63.6 201.8 -31.8 217.7 15.9C233.6 63.6 212.3 127.3 169.8 151.3C127.3 175.3 63.6 159.6 9.1 150.6C-45.5 141.5 -91 139 -134 115C-177 91 -217.5 45.5 -221.9 -4.4C-226.2 -54.2 -194.4 -108.4 -151.4 -140.8C-108.4 -173.1 -54.2 -183.5 -11.2 -172.4C31.8 -161.2 63.6 -128.3 106.1 -96'
            fill='#2F3B56'></path>
        </g>

        <g
          transform='translate(496.26292359754433 257.5869917355015)'
          className='hidden'>
          <path
            id='blob4'
            d='M157.4 -158.8C187.6 -127.3 184.3 -63.6 168.4 -15.9C152.5 31.8 124 63.6 93.8 104.1C63.6 144.6 31.8 193.8 -13.2 207C-58.2 220.2 -116.4 197.4 -156.4 156.9C-196.4 116.4 -218.2 58.2 -211.7 6.5C-205.3 -45.3 -170.5 -90.5 -130.5 -122C-90.5 -153.5 -45.3 -171.3 9.2 -180.4C63.6 -189.6 127.3 -190.3 157.4 -158.8'
            fill='#2F3B56'></path>
        </g>
      </svg>
    </div>
  );
};

export default HeroBackground;
