import { motion } from 'framer-motion'
import { useOnScreen } from '../hooks/useOnScreen'
import { expandElement } from './animation/directionalAnimations'
function Contact() {
  const [ref, isVisible] = useOnScreen({ rootMargin: '-100px' })
  return (
    <motion.section
      ref={ref}
      className='Contact shadow-lg border-radius'
      id='contact'
      initial='initial'
      animate={isVisible ? 'animate' : 'initial'}
      variants={expandElement}
    >
      <div className='Contact__content-container '>
        {/* top/left content */}
        <motion.div
          className='Contact__header'
          ref={ref}
          initial='initial'
          animate={isVisible ? 'animate' : 'initial'}
          variants={expandElement}
        >
          <h2 className='Contact__title'>Contact</h2>
          <h2 className='Contact__title--bottom'>Me</h2>
        </motion.div>
        <motion.div
          className='Contact__links'
          ref={ref}
          initial='initial'
          animate={isVisible ? 'animate' : 'initial'}
          variants={expandElement}
        >
          <h3 className='Contact__links--title'>Also find me here:</h3>
          <a
            href='https://github.com/BorofskyDev'
            target='_blank'
            className='Contact__links--link'
          >
            GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/joelborofsky/'
            target='_blank'
            className='Contact__links--link'
          >
            LinkedIn
          </a>
          <a
            href='https://codepen.io/borofskyDev'
            target='_blank'
            className='Contact__links--link'
          >
            Twitter
          </a>
          <a
            href='https://twitter.com/DevBorofsky'
            target='_blank'
            className='Contact__links--link'
          >
            CodePen
          </a>
        </motion.div>
        <motion.p
          className='Contact__email'
          ref={ref}
          initial='initial'
          animate={isVisible ? 'animate' : 'initial'}
          variants={expandElement}
        >
          Form not working? joelborofskydev@gmail
        </motion.p>
      </div>
      <div className='Contact__form-container'>
        {/* Form */}
        <form
          action='https://formsubmit.co/joelborofskydev@gmail.com'
          method='post'
          className='Contact__form'
        >
          <motion.div
            className='Contact__form-control'
            ref={ref}
            initial='initial'
            animate={isVisible ? 'animate' : 'initial'}
            variants={expandElement}
          >
            <label htmlFor='full name' className='sr-only'>
              Enter your name
            </label>
            <input
              type='text'
              name='full name'
              min='1'
              max='30'
              placeholder='Name'
              required
              className='Contact__form-control--input border-radius'
            />
          </motion.div>
          <motion.div
            className='Contact__form-control'
            ref={ref}
            initial='initial'
            animate={isVisible ? 'animate' : 'initial'}
            variants={expandElement}
          >
            <label htmlFor='email' className='sr-only'>
              Enter your email
            </label>
            <input
              type='email'
              name='email address'
              placeholder='Email'
              required
              className='Contact__form-control--input border-radius'
            />
          </motion.div>
          <motion.div
            className='Contact__form-control'
            ref={ref}
            initial='initial'
            animate={isVisible ? 'animate' : 'initial'}
            variants={expandElement}
          >
            <label htmlFor='subject' className='sr-only'>
              Enter the subject of the email
            </label>
            <input
              type='text'
              name='service'
              min='3'
              max='40'
              placeholder='Subject'
              required
              className='Contact__form-control--input border-radius'
            />
          </motion.div>
          <motion.div
            className='Contact__form-control'
            ref={ref}
            initial='initial'
            animate={isVisible ? 'animate' : 'initial'}
            variants={expandElement}
          >
            <label htmlFor='message' className='sr-only'>
              Enter your message
            </label>
            <textarea
              name='message'
              placeholder='Message'
              required
              className='Contact__form-control--input border-radius'
            />
          </motion.div>
          <motion.button
            className='Contact__button shadow-md border-radius'
            ref={ref}
            initial='initial'
            animate={isVisible ? 'animate' : 'initial'}
            variants={expandElement}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </motion.section>
  )
}

export default Contact
