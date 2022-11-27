function Contact() {
  return (
    <section className='Contact'>
      <h2 className='section__title'>Contact Me</h2>
      <p className='section__subtitle'>Let's work together!</p>
      <form
        action='https://formsubmit.co/joelborofskydev@gmail.com'
        method='post'
        className='Contact__form'
      >
        <div className='Contact__container'>
          <div className='Contact__container--control'>
            <input className='Contact__container--input name-input' type='text' name='full name' min='1' max='30' required />
            <label className="Contact__container--label name-label">Full Name</label>
          </div>
          <div className='Contact__container--control'>
            <input className='Contact__container--input email-input' type='email' name='email address' required />
            <label className="Contact__container--label email-label">Email Address</label>
          </div>
          <div className='Contact__container--control'>
            <input className='Contact__container--input subject-input' type='text' name='service' min='3' max='40' required />
            <label className="Contact__container--label subject-label">Service Type</label>
          </div>
          <div className='Contact__container--control'>
            <label className='Contact__container--message message-label'>Message</label>
            <textarea className='Contact__container--label message-input' cols='30' rows='10' name='message' required />
          </div>
          <button className='Contact__button'>Send Message</button>
        </div>
      </form>
    </section>
  )
}

export default Contact
