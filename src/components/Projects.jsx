import { motion } from 'framer-motion'
import { topAnimate, leftAnimate } from './animation/directionalAnimations'
import data from '../assets/projectData'
import { ProjectsCard } from './util'

function Projects() {
  const cards = data.map((item) => {
    return <ProjectsCard key={item.id} {...item} />
  })

  return (
    <motion.section
      className='Projects'
      id='projects'
      initial={'offscreen'}
      whileInView={'onscreen'}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.h2 className='section__title' variants={topAnimate}>
        Projects
      </motion.h2>
      <div className='Projects__container' >
        {cards}
      </div>
    </motion.section>
  )
}

export default Projects
