import { FaCss3, FaHtml5, FaJs, FaReact, FaSass } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiThreedotjs } from 'react-icons/si'

function Stack() {
  return (
    <section className='Stack'>
      <h2 className='section__title section__title--stack'>My Stack</h2>
      <div className='Stack__tech-container'>
        <a
          href='https://www.w3schools.com/html/default.asp'
          target='_blank'
          className='Stack__btn border-radius'
          style={{ '--clr': '#DD4B25' }}
        >
          <FaHtml5 className='Stack__btn--icon' />
          HTML 5
        </a>
        <a
          href='https://www.w3schools.com/css/default.asp'
          target='_blank'
          className='Stack__btn border-radius'
          style={{ '--clr': '#2862E9' }}
        >
          <FaCss3 className='Stack__btn--icon' />
          CSS
        </a>
        <a
          href='https://www.w3schools.com/js/default.asp'
          target='_blank'
          className='Stack__btn border-radius'
          style={{ '--clr': '#F3D13C' }}
        >
          <FaJs className='Stack__btn--icon' />
          JavaScript
        </a>
        <a
          href='https://scrimba.com/learn/learnreact'
          target='_blank'
          className='Stack__btn border-radius'
          style={{ '--clr': '#5ED3F3' }}
        >
          <FaReact className='Stack__btn--icon' />
          React
        </a>
        <a
          href='https://www.w3schools.com/sass/default.php'
          target='_blank'
          className='Stack__btn border-radius'
          style={{ '--clr': '#CF649A' }}
        >
          <FaSass className='Stack__btn--icon' />
          SASS
        </a>
        <a
          href='https://threejs-journey.com/'
          target='_blank'
          className='Stack__btn border-radius'
          style={{ '--clr': '#6151D2' }}
        >
          <SiThreedotjs className='Stack__btn--icon' />
          Threejs / React-Three-Fiber
        </a>
        <a
          href='https://tailwindcss.com/'
          target='_blank'
          className='Stack__btn border-radius'
          style={{ '--clr': '#49ABAF' }}
        >
          <SiTailwindcss className='Stack__btn--icon' />
          TailwindCSS
        </a>

        <a
          href='https://www.freecodecamp.org/news/nextjs-tutorial/'
          target='_blank'
          className='Stack__btn border-radius'
          style={{ '--clr': '#f43f5e' }}
        >
          <SiNextdotjs className='Stack__btn--icon' />
          NextJS
        </a>
      </div>
    </section>
  )
}

export default Stack
