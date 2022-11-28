import { GiSun, GiMoon } from 'react-icons/gi'
import joel1 from '../assets/personal-images/me1.jpg'

function Hero(props) {
  const { toggleTheme, theme } = props

  return (
    <section className='Hero'>
      <div className='Hero__container'>
        <h1 className='Hero__section'>
          Hi, I am <strong>Joel Borofsky</strong>
        </h1>
        <p className='section__subtitle section__subtitle--intro'>
          Creative Frontend Developer
        </p>
        <img src={joel1} alt='' className='Hero__img shadow-lg' />
        <div className='Hero__theme-toggler' onClick={toggleTheme}>
          {theme === 'dark' ? (
            <button className='Hero__theme-toggler--light toggle-btn shadow-sm'>
              <GiSun onClick={toggleTheme} />
              <span className="sr-only">Switch to Light Mode</span>
            </button>
          ) : (
            <button className='Hero__theme-toggler--dark toggle-btn shadow-sm'>
              <GiMoon onClick={toggleTheme} />
              <span className="sr-only">Switch to Dark Mode</span>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
