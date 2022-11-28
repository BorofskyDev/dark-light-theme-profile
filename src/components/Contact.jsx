function Contact() {
  return (
    <section className='Contact shadow-lg border-radius'>
      <div className='Contact__content-container '>
        {/* top/left content */}
        <div className='Contact__header'>
          <h2 className='Contact__title'>Contact</h2>
          <h2 className='Contact__title--bottom'>Me</h2>
        </div>
        <div className='Contact__links'>
          <h3 className='Contact__links--title'>Also find me here:</h3>
          <a href='#' className='Contact__links--link'>
            GitHub
          </a>
          <a href='#' className='Contact__links--link'>
            LinkedIn
          </a>
          <a href='#' className='Contact__links--link'>
            Twitter
          </a>
          <a href='#' className='Contact__links--link'>
            CodePen
          </a>
        </div>
        <p className='Contact__email'>
          Form not working? joelborofskydev@gmail
        </p>
      </div>
      <div className='Contact__form-container'>
        {/* Form */}
        <form
          action='https://formsubmit.co/joelborofskydev@gmail.com'
          method='post'
          className='Contact__form'
        >
          <div className='Contact__form-control'>
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
          </div>
          <div className='Contact__form-control'>
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
          </div>
          <div className='Contact__form-control'>
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
          </div>
          <div className='Contact__form-control'>
            <label htmlFor='message' className='sr-only'>
              Enter your message
            </label>
            <textarea
              name='message'
              placeholder='Message'
              required
              className='Contact__form-control--input border-radius'
            />
          </div>
          <button className='Contact__button shadow-md border-radius'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

