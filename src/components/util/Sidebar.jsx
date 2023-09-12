import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

function Sidebar(props) {
  const { menu, setMenu } = props
  const controls = useAnimation()

  useEffect(() => {
    if (menu) {
      controls.start({
        x: 0,
        transition: { duration: 0.75, ease: 'easeInOut' },
      })
    } else {
      controls.start({
        x: '100%',
        transition: { duration: 0.75, ease: 'easeInOut' },
      })
    }
  }, [menu, controls])

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setMenu(false)
      }
    }
    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, [])

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={controls}
      className='Menu'
    >
      <div className='Menu__wrapper'>
        <div className='Menu__layer'></div>
        <nav className='Menu__nav'>
          <div className='Menu__top'>
            <ul className='Menu__links'>
              <li className='Menu__link'>
                <a href='#about' className='Menu__link--section'>
                  About
                </a>
              </li>
              <li className='Menu__link'>
                <a href='#projects' className='Menu__link--section'>
                  Projects
                </a>
              </li>
              <li className='Menu__link'>
                <a href='#contact' className='Menu__link--section'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </motion.div>
  )
}

export default Sidebar
