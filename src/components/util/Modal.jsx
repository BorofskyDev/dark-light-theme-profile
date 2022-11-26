import React from 'react'
import ModalContent from './ModalContent'

function Modal(props) {
  const { currentIndex, toggle, action, slides } = props
  const modalState = toggle

  return (
    <div className={`Modal-container ${modalState ? 'active' : ''}`}>
      <div className='Modal-container__modal'>
        <div className='Modal-container__modal--title'><ModalContent slides={slides} currentIndex={currentIndex}  /></div>
        <div className='Modal-container__modal--close' onClick={action}>
          X
        </div>
      </div>
    </div>
  )
}

export default Modal
