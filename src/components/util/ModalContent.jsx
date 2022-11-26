function ModalContent(props) {
  const { slides, currentIndex, setCurrentIndex } = props

  return (
    <div className='Card'>
      <img
        src={`../../../public/project-images/${slides[currentIndex].imageUrl}`}
        alt={slides[currentIndex].title}
        className='Card__img'
      />
      <div className='Card__container'>
        <header className='Card__header'>
          <a href={slides[currentIndex].repository} target='_blank' className='Card__link'>
            Repository
          </a>
          <a href={slides[currentIndex].liveSite} target='_blank' className='Card__link'>
            Live Site
          </a>
        </header>
        <h3 className='Card__title'>{slides[currentIndex].title}</h3>
        <p className='Card__desc'>{slides[currentIndex].description}</p>
      </div>
    </div>
  )
}

export default ModalContent
