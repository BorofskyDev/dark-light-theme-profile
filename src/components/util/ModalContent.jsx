import React from 'react'

function ModalContent(props) {
  return (
    <div className='card'>
      <img
        src={`src/assets/images/${props.imageUrl}`}
        alt=''
        className='card__img'
      />
      <div className='card__container'>
        <header className='card__header'>
         
          <p className='card__country'>{props.location}</p>
          <a
            href={props.googleMapsUrl}
            target='_blank'
            className='card__location-link'
          >
            View on Google Maps
          </a>
        </header>
        <h1 className='card__title'>{props.title}</h1>
        <p className='card__date'>
          {props.startDate} - {props.endDate}
        </p>
        <p className='card__description'>{props.description}</p>
      </div>
    </div>
  )
}

export default ModalContent