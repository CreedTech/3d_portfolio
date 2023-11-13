import { motion } from 'framer-motion';

import { styles } from '../styles';
import { profileImg } from '../assets';
import Typed from "react-typed";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0   max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center justify-center gap-5`}
      >
        <div className="flex flex-col items-center justify-center ">
          <div className="w-5 h-5 rounded-full bg-[#f94204]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>

        <div className='flex flex-row items-center justify-center'>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I&apos;m <span className="text-[#f94204]">Ayoola</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 capitalize`}>
              I develop fullstacked mobile <br className="hidden sm:block" />
               and web applications
            </p>
            <Typed
                style={{ background: "transparent" }}
                strings={[
                  " A Web Developer.",
                  " A Mobile Developer.",
                  " A Full Stack Developer.",
                  " A Frontend Developer.",
                  " A React Developer.",
                  " A Backend Developer.",
                  " A Python Developer.",
                  " A Django Enthusiast.",
                  " A Flutter Lover.",
                ]}
                typeSpeed={70}
                backSpeed={60}
                loop
              >
                <span
                
                  style={{
                    color: "#f94204",
                    fontSize: "calc(1rem + 1vw)",
                  }}
              ></span>
              {/* <span className='lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px]'></span> */}
              </Typed>
          </div>
          <div>
            <img src={profileImg} alt="" className="hidden md:block" />
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute flex items-center justify-center w-full xs:bottom-10 bottom-32">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 mb-1 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
