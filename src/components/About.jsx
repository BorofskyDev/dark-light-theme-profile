import { motion } from 'framer-motion'
import { useOnScreen } from '../hooks/useOnScreen'
import { FaGithub, FaLinkedinIn, FaCodepen, FaTwitter } from 'react-icons/fa'
import { expandElement } from './animation/directionalAnimations'
import joel2 from '../assets/personal-images/me-kyiv.jpg'

function About() {
  const [ref, isVisible] = useOnScreen({ rootMargin: '-100px' })
  return (
    <motion.section
      ref={ref}
      className='About'
      id='about'
      initial='initial'
      animate={isVisible ? 'animate' : 'initial'}
      variants={expandElement}
      // transition={{ staggerChildren: 0.5 }}
    >
      <motion.h2
        ref={ref}
        className='section__title section__title--about'
        initial='initial'
        animate={isVisible ? 'animate' : 'initial'}
        variants={expandElement}
      >
        Who I am
      </motion.h2>
      <motion.p
        ref={ref}
        className='section__subtitle section__subtitle--about'
        initial='initial'
        animate={isVisible ? 'animate' : 'initial'}
        variants={expandElement}
      >
        Developer and Designer based in the USA
      </motion.p>
      <motion.div
        ref={ref}
        className='About__body'
        initial='initial'
        animate={isVisible ? 'animate' : 'initial'}
        variants={expandElement}
      >
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
        ref={ref}
        src={joel2}
        alt='Joel standing with arms crossed and a bird on his shoulder, in Maidan Square in Kyiv, Ukraine'
        className='About__img shadow-md border-radius'
        initial='initial'
        animate={isVisible ? 'animate' : 'initial'}
        variants={expandElement}
      />
      <motion.div
        ref={ref}
        className='About__social-media'
        initial='initial'
        animate={isVisible ? 'animate' : 'initial'}
        variants={expandElement}
      >
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
