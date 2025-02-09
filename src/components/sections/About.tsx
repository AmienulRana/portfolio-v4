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
        Highly motivated and results-oriented Frontend developer with 3 years of experience building
        usercentricweb applications. Adept in React.js, Next.js, Vue.js, Nuxt.js, Typescript and
        React Native, I possess a strongunderstanding of best practices for unit and end-to-end
        testing (Jest and Cypress) to deliver high- qualityand performant applications. Passionate
        about crafting intuitive and visually appealing UIs that elevate theuser experience.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, 'about');
