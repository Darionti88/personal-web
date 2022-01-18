import Particles from "react-tsparticles";

const BackgroundParticles = () => {
  return (
    <Particles
      id='tsparticles'
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        detectRetina: true,
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "light",
              parallax: {
                enable: false,
                force: 60,
                smooth: 10,
              },
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 10,
            },
            grab: {
              distance: 400,
              lineLinked: {
                opacity: 1,
              },
            },
            push: {
              quantity: 4,
            },
            remove: {
              quantity: 2,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          move: {
            attract: {
              enable: false,
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            bounce: true,
            direction: "none",
            enable: true,
            outMode: "out",
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            limit: 20,
            value: 25,
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.2,
              speed: 1,
              sync: false,
            },
            random: true,
            value: 1,
          },
          rotate: {
            animation: {
              enable: true,
              speed: 5,
              sync: false,
            },
            direction: "random",
            random: true,
            value: 0,
          },
          shape: {
            image: [
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                width: 25,
                height: 25,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                height: 25,
                width: 25,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
                width: 25,
                height: 25,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
                height: 25,
                width: 25,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                width: 25,
                height: 25,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                height: 25,
                width: 25,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jamstack/jamstack-original.svg",
                width: 25,
                height: 25,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
                height: 25,
                width: 25,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
                height: 25,
                width: 25,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                width: 25,
                height: 25,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
                height: 25,
                width: 25,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                width: 25,
                height: 25,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                height: 25,
                width: 25,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
                width: 25,
                height: 25,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                height: 25,
                width: 25,
              },
            ],
            type: "image",
          },
          size: {
            animation: {
              enable: false,
              minimumValue: 0.1,
              speed: 40,
              sync: false,
            },
            random: false,
            value: 22,
          },
        },
        background: {
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
      }}
    />
  );
};

export default BackgroundParticles;
