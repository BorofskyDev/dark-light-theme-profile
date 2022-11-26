import { FaGithub, FaLinkedinIn, FaCodepen, FaTwitter, FaLink, FaCode } from 'react-icons/fa'
import joel2 from '../assets/personal-images/me-kyiv.jpg'

function About() {
  return (
    <section className='About'>
      <h2 className='section__title section__title--about'>Who I am</h2>
      <p className='section__subtitle section__subtitle--about'>
        Developer and Designer based in the USA
      </p>
      <div className='About__body'>
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
      </div>
      <img
        src={joel2}
        alt='Joel standing with arms crossed and a bird on his shoulder, in Maidan Square in Kyiv, Ukraine'
        className='About__img'
      />
      <div className='About__social-media'>
        <a href='#' className='About__social-media--link'>
          <span className="sr-only">Github</span>
          <FaGithub className='About__social-media--icon github' />
        </a>
        <a href='#' className='About__social-media--link'>
          <span className="sr-only">Linkedin</span>
          <FaLinkedinIn className='About__social-media--icon linkedin' />
        </a>
        <a href='#' className='About__social-media--link'>
          <span className="sr-only">Codepen</span>
          <FaCodepen className='About__social-media--icon codepen' />
        </a>
        <a href='#' className='About__social-media--link'>
          <span className="sr-only">Twitter</span>
          <FaTwitter className='About__social-media--icon twitter' />
        </a>
      </div>
    </section>
  )
}

export default About
