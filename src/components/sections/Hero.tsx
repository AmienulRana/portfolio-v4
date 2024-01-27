import { motion } from 'framer-motion';

import { styles } from '../../constants/styles';
import { HiDownload } from 'react-icons/hi';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare, FaWhatsappSquare } from 'react-icons/fa';

interface ISosmedLink {
  href:string;
  ariaLabel:string;
  Icon: any
}

const SosmedLink = ({ href, ariaLabel, Icon }: ISosmedLink) => {
  return (
    <a
      className="bg-white p-4 text-gray-700 hover:text-[#915EFF] flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
      href={href}
      target="_blank"
      aria-label={ariaLabel}
    >
      <Icon />
    </a>
  );
};

const Hero = () => {
  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Amienul Rana</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            I enjoy <span className="text-[#915EFF]">building</span> and{' '}
            <span className="text-[#915EFF]">develop</span> for the web and mobile application.{' '}
            <br className="hidden sm:block" />
          </p>
          <div className="flex gap-5 mt-5 flex-wrap">
            <a
              className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
              href="/assets/my_cv.pdf"
              download
              aria-label="download cv amienul rana"
            >
              Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>

            <SosmedLink href='https://www.linkedin.com/in/amienulrana/' ariaLabel={'Amienul Rana Linkedin'} Icon={BsLinkedin}/>
            <SosmedLink href='https://github.com/AmienulRana' ariaLabel={'Amienul Rana Github'} Icon={FaGithubSquare}/>
            <SosmedLink href='https://wa.me/6285260298204?text=Hello Amienul' ariaLabel={'Amienul Rana Whatsapp'} Icon={FaWhatsappSquare}/>
          </div>
        </div>
      </div>

      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
