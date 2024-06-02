import React, { useEffect } from 'react';
import myPhoto from '../image/myimage.jpg';
import '../App.css';
import { motion, useAnimation } from 'framer-motion';

const Home = () => {
  const text = 'Full Stack Developer'.split(' ');
  const text2 = 'Hello, I am Shivam Raikar.'.split(' ');
  const controls = useAnimation();
  const controls2 = useAnimation();

  const animateText = async (controls, textLength) => {
    for (let i = 0; i < textLength; i++) {
      await controls.start((index) => ({
        opacity: index <= i ? 1 : 0,
        transition: { duration: 0.25 },
      }));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      animateText(controls, text.length);
      animateText(controls2, text2.length);
    }, 5000);

    animateText(controls, text.length);
    animateText(controls2, text2.length);

    return () => clearInterval(interval);
  }, [controls, controls2, text.length, text2.length]);

  return (
    <section id="home" className="h-screen flex flex-col justify-center lg:flex-row lg:justify-around items-center">
      <div className="h-40 w-40 lg:h-80 lg:w-80">
        <img className="rounded-full" src={myPhoto} alt="Shivam Raikar" />
      </div>
      <div className="text-white text-4xl lg:text-8xl jersey-20-regular">
        <div>
          {text2.map((el, i) => (
            <motion.span
              custom={i}
              animate={controls2}
              initial={{ opacity: 0 }}
              key={i}
            >
              {el}{' '}
            </motion.span>
          ))}
        </div>
        <div className="text-3xl lg:text-7xl">
          {text.map((el, i) => (
            <motion.span
              custom={i}
              animate={controls}
              initial={{ opacity: 0 }}
              key={i}
            >
              {el}{' '}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
