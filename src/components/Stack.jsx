import { FaCss3, FaHtml5, FaJs, FaReact, FaSass } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiThreedotjs } from 'react-icons/si'
import { motion } from 'framer-motion'
import { topAnimate, bottomAnimate } from './animation/directionalAnimations'

function Stack() {
  return (
    <motion.section
      className='Stack'
      initial={'offscreen'}
      whileInView={'onscreen'}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <motion.h2
        className='section__title section__title--stack'
        variants={topAnimate}
      >
        My Stack
      </motion.h2>
      <div className='Stack__tech-container'>
        <motion.a
          href='https://www.w3schools.com/html/default.asp'
          target='_blank'
          className='Stack__btn border-radius'
          style={{ '--clr': '#DD4B25' }}
          variants={bottomAnimate}
        >
          <FaHtml5 className='Stack__btn--icon' />
          HTML 5
        </motion.a>
        <motion.a
          href='https://www.w3schools.com/css/default.asp'
          target='_blank'
          className='Stack__btn border-radius'
          style={{ '--clr': '#2862E9' }}
          variants={bottomAnimate}
        >
          <FaCss3 className='Stack__btn--icon' />
          CSS
        </motion.a>
        <motion.a
          href='https://www.w3schools.com/js/default.asp'
          target='_blank'
          className='Stack__btn border-radius'
          style={{ '--clr': '#F3D13C' }}
          variants={bottomAnimate}
        >
          <FaJs className='Stack__btn--icon' />
          JavaScript
        </motion.a>
        <motion.a
          href='https://scrimba.com/learn/learnreact'
          target='_blank'
          className='Stack__btn border-radius'
          style={{ '--clr': '#5ED3F3' }}
          variants={bottomAnimate}
        >
          <FaReact className='Stack__btn--icon' />
          React
        </motion.a>
        <motion.a
          href='https://www.w3schools.com/sass/default.php'
          target='_blank'
          className='Stack__btn border-radius'
          style={{ '--clr': '#CF649A' }}
          variants={bottomAnimate}
        >
          <FaSass className='Stack__btn--icon' />
          SASS
        </motion.a>
        <motion.a
          href='https://threejs-journey.com/'
          target='_blank'
          className='Stack__btn border-radius'
          style={{ '--clr': '#6151D2' }}
          variants={bottomAnimate}
        >
          <SiThreedotjs className='Stack__btn--icon' />
          Threejs / React-Three-Fiber
        </motion.a>
        <motion.a
          href='https://tailwindcss.com/'
          target='_blank'
          className='Stack__btn border-radius'
          style={{ '--clr': '#49ABAF' }}
          variants={bottomAnimate}
        >
          <SiTailwindcss className='Stack__btn--icon' />
          TailwindCSS
        </motion.a>

        <motion.a
          href='https://www.freecodecamp.org/news/nextjs-tutorial/'
          target='_blank'
          className='Stack__btn border-radius'
          style={{ '--clr': '#f43f5e' }}
          variants={bottomAnimate}
        >
          <SiNextdotjs className='Stack__btn--icon' />
          NextJS
        </motion.a>
      </div>
    </motion.section>
  )
}

export default Stack
