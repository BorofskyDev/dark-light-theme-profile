import me from '../assets/personal-images/me1.jpg'

function Footer() {
  return (
    <footer className='Footer'>
      <div className='Footer__profile'>
        <img
          src={me}
          alt='black and white of Joel staring at the camera with a beanie on'
          className='Footer__profile--img shadow-sm border-radius'
        />
        <p className='Footer__profile--name'>Joel Borofsky</p>
        <p className='Footer__profile--title'>Creative Developer</p>
      </div>
      <div className='Footer__profile'>
        <p className='Footer__profile--place'>Kansas</p>
        <p className='Footer__profile--place'>USA</p>
      </div>
      <div className='Footer__profile'>
        <p className='Footer__profile--desc'>UI/UX</p>
        <p className='Footer__profile--desc'>Frontend Developer</p>
      </div>

      <div className='Footer__profile'>
        <p className='Footer__logo'>
          &#123; <span className='Footer__logo--borofsky'>B</span>orofsky{' '}
          <span className='Footer__logo--dev'>D</span>ev &#125;
        </p>
        <p className='Footer__slava'>
          <span className='Footer__slava--ukr'>Слава</span>{' '}
          <span className='Footer__slava--iane'>Україні</span> !
        </p>
        {/* <p className='Footer__copyright'>Copyright©2022</p> */}
      </div>
    </footer>
  )
}

export default Footer
