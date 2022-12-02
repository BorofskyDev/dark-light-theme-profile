import { motion } from 'framer-motion'
import {
  FaGithub,
  FaLinkedinIn,
  FaCodepen,
  FaTwitter
} from 'react-icons/fa'
import {
  leftAnimate,
  topAnimate,
  rightAnimate,
  bottomAnimate,
} from './animation/directionalAnimations'
import joel2 from '../assets/personal-images/me-kyiv.jpg'

function About() {
  return (
    <motion.section
      className='About'
      id='about'
      initial={'offscreen'}
      whileInView={'onscreen'}
      viewport={{ once: true, amount: 0.5 }}
      // transition={{ staggerChildren: 0.5 }}
    >
      <motion.h2
        className='section__title section__title--about'
        variants={topAnimate}
      >
        Who I am
      </motion.h2>
      <motion.p
        className='section__subtitle section__subtitle--about'
        variants={leftAnimate}
      >
        Developer and Designer based in the USA
      </motion.p>
      <motion.div className='About__body' variants={bottomAnimate}>
        <p>
          Currently based out of Wichita, KS, I am a frontend developer with an
          eye for design. I am unabashedly in love with CSS, ThreeJS, and React
          Three Fiber (especially Drei!). But I also love playing around with
          data and seeing how that data can translate to the frontend, and have
          a firm belief that any design project must begin and end with
          understanding the backend.
        </p>
        <br />
        <p>
          In my downtime you'll find me playing Cities: Skylines (a lot),
          working on my own projects, taking walks, working out, and when time
          and money permit, traveling. I enjoy experiencing different cultures
          and have a host of places that I want to visit.
        </p>
      </motion.div>

      <motion.img
        src={joel2}
        alt='Joel standing with arms crossed and a bird on his shoulder, in Maidan Square in Kyiv, Ukraine'
        className='About__img shadow-md border-radius'
        variants={rightAnimate}
      />
      <motion.div className='About__social-media' variants={bottomAnimate}>
        <a
          href='https://github.com/BorofskyDev'
          target='_blank'
          className='About__social-media--link '
        >
          <span className='sr-only'>Github</span>
          <FaGithub className='About__social-media--icon shadow-sm border-radius-full github' />
        </a>
        <a
          href='https://www.linkedin.com/in/joelborofsky/'
          target='_blank'
          className='About__social-media--link'
        >
          <span className='sr-only'>Linkedin</span>
          <FaLinkedinIn className='About__social-media--icon shadow-sm border-radius-full linkedin' />
        </a>
        <a
          href='https://codepen.io/borofskyDev'
          target='_blank'
          className='About__social-media--link'
        >
          <span className='sr-only'>Codepen</span>
          <FaCodepen className='About__social-media--icon shadow-sm border-radius-full codepen' />
        </a>
        <a
          href='https://twitter.com/DevBorofsky'
          target='_blank'
          className='About__social-media--link'
        >
          <span className='sr-only'>Twitter</span>
          <FaTwitter className='About__social-media--icon shadow-sm border-radius-full twitter' />
        </a>
      </motion.div>
    </motion.section>
  )
}

export default About
