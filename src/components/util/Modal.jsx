import React from 'react'
import ModalContent from './ModalContent'

function Modal(props) {
  const modalState = props.toggle
  const action = props.action
  const cards = props.slides.map((item) => {
    return <ModalContent key={item.id} {...item} />
  })
  return (
    <div className={`Modal-container ${modalState ? 'active' : ''}`}>
      <div className='Modal-container__modal'>
        <img
          src={props.imageUrl}
          alt={props.title}
          className='Modal-container__modal--img'
        />
        <h3 className='Modal-container__modal--title'>{cards}</h3>
        <div className='Modal-container__modal--close' onClick={action}>
          X
        </div>
      </div>
    </div>
  )
}

export default Modal
