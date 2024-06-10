import React, { useEffect, useState } from 'react';
import '../App.css';
import { motion, useAnimation } from 'framer-motion';

const Home = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const textPhrases = [
    'Full Stack Developer',
    'UI UX Designer',
    'Graphic Designer',
    'Gamer'
  ];
  const text2 = 'Hello, I am Shivam Raikar.'.split(' ');
  const controls = useAnimation();
  const controls2 = useAnimation();

  const animateText = async (controls, textArray) => {
    for (let i = 0; i < textArray.length; i++) {
      await controls.start((index) => ({
        opacity: index <= i ? 1 : 0,
        transition: { duration: 0.25 },
      }));
    }
  };

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % textPhrases.length);
    }, 5000);

    const blinkInterval = setInterval(() => {
      animateText(controls2, text2);
    }, 15000);

    animateText(controls, textPhrases[currentPhraseIndex].split(' '));
    animateText(controls2, text2);

    return () => {
      clearInterval(phraseInterval);
      clearInterval(blinkInterval);
    };
  }, [controls, controls2, currentPhraseIndex, textPhrases, text2]);

  useEffect(() => {
    animateText(controls, textPhrases[currentPhraseIndex].split(' '));
  }, [currentPhraseIndex, controls, textPhrases]);

  return (
    <section id="home" className="h-screen flex flex-col justify-center lg:flex-row lg:justify-around items-center">
      <div className="h-40 w-40 lg:h-80 lg:w-80">
        <img className="rounded-full" src="/image/myimage.jpg" alt="Shivam Raikar" />
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
          {textPhrases[currentPhraseIndex].split(' ').map((el, i) => (
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
