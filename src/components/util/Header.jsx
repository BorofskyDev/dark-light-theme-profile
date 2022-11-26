function Header(props) {
  const { menu, setMenu } = props

  return (
    <header className='Header'>
      <div className='Header__logo'>
        <p className='Header__logo--title stronger'>
          &#123; <span className='Header__logo--borofsky'>B</span>orofsky
          <span className='Header__logo--dev'>D</span>ev &#125;
        </p>
      </div>
      <div className='Header__button'>
        <button
          onClick={() => setMenu(!menu)}
          className={`menu__trigger ? ${menu ? 'menu__close' : ''}`}
        >
          <span></span>
          <span></span>
          <span></span>
          
          <p className='sr-only'>Menu Toggle</p>
        </button>
      </div>
    </header>
  )
}

export default Header
