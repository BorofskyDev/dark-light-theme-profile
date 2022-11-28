import data from '../assets/projectData'
import { ProjectsCard } from './util'

function Projects() {
  const cards = data.map((item) => {
    return <ProjectsCard key={item.id} {...item} />
  })

  return (
    <section className='Projects' id='projects'>
      <h2 className='section__title'>Projects</h2>
      <div className='Projects__container'>
        {cards}
      </div>
    </section>
  )
}

export default Projects
