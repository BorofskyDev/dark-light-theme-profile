import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function Sidebar(props) {
  const { menu, setMenu } = props
  let sidebarMenu = useRef(null)
  let sidebarMenuOverlay = useRef(null)
  let menuLayer = useRef(null)
  let menuTimeline = useRef(null)
  let menuRef = useRef(null)

  useEffect(() => {
    menuTimeline.current = gsap.timeline({ paused: true })
    menuTimeline.current.fromTo(
      [sidebarMenuOverlay, menuLayer, sidebarMenu],
      { duration: 0, x: '100%' },
      {
        duration: 0.75,
        x: '0%',
        ease: 'power3.inOut',
        stagger: {
          amount: 0.5,
        },
      }
    )
  }, [])

  useEffect(() => {
    menu ? menuTimeline.current.play() : menuTimeline.current.reverse()
  }, [menu])

  useEffect(() => {
    let handler = (e) => {
      if(!menuRef.current.contains(e.target)){
        setMenu(false)
      } 
    }
    document.addEventListener('mousedown', handler)

    return() => {
      document.removeEventListener('mousedown', handler)
    }
  }, )

  return (
    <div className='Menu' ref={(el) => (sidebarMenuOverlay = el)}>
      <div className='Menu__wrapper'>
        <div className='Menu__layer' ref={(el) => (menuLayer = el)}></div>
        <nav className='Menu__nav' ref={(el) => (sidebarMenu = el)}>
          <div className='Menu__top' ref={menuRef}>
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
    </div>
  )
}

export default Sidebar
