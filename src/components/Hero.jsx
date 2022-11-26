import { GiBarbedSun, GiFalconMoon } from 'react-icons/gi'
import joel1 from '../assets/personal-images/me1.jpg'

function Hero(props) {
  const { toggleTheme, theme, setTheme } = props

  return (
    <section className='Hero'>
      <div className='Hero__container'>
        <h1 className='Hero__section'>
          Hi, I am <strong>Joel Borofsky</strong>
        </h1>
        <p className='section__subtitle section__subtitle--intro'>
          Creative Frontend Developer
        </p>
        <img src={joel1} alt='' className='Hero__img' />
        <div className='Hero__theme-toggler' onClick={toggleTheme}>
          <button className='Hero__theme-toggler--light toggle-btn'>
            <GiBarbedSun onClick={toggleTheme} />
          </button>
          <button className='Hero__theme-toggler--dark toggle-btn'>
            <GiFalconMoon onClick={toggleTheme} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
