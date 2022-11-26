import { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import Modal from './Modal'

function Slider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [modal, setModal] = useState(false)

  const slideStyle = {
    backgroundImage: `url(${slides[currentIndex].imageUrl})`,
  }

  function goToPrevious() {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  function goToNext() {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  function openModal() {
    setModal(!modal)
  }

  return (
    <div className='Projects__slider'>
      <div className='Projects__arrow right' onClick={goToPrevious}>
        <AiOutlineArrowLeft />
      </div>
      <div className='Projects__arrow left' onClick={goToNext}>
        <AiOutlineArrowRight />
      </div>
      <div className='Projects__slides' style={slideStyle}>
        <button className='Projects__slides--modal-btn' onClick={openModal}>
          See Project
        </button>

        <Modal
          currentIndex={currentIndex}
          slides={slides}
          toggle={modal}
          action={openModal}
        />
      </div>
    </div>
  )
}

export default Slider
