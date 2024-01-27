import { motion } from 'framer-motion';
import { SectionWrapper } from '../../hoc';
import { fadeIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';

const About = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
        As a frontend developer with 2 years of experience, I am skilled in several modern
        technologies, including React.js, Next.js, Vue.js, and GraphQL. I am also proficient in
        Typescript and have experience with Jest for unit testing and cypress for E2E testing. I am
        passionate about creating user-friendly and intuitive interfaces that enhance the user
        experience. I am always looking to learn new technologies.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, 'about');
