import React, { useState } from 'react'

const PopularLi = ({item}) => {
  const [show, showState] = useState(false)
  return (
    <li className='popularq__content-purchaces-accordion-item'>
        <h2 className='popularq__content-purchaces-accordion-title'>{item.title} <span className={show ? 'popularq__content-purchaces-accordion-minus' : 'popularq__content-purchaces-accordion-plus' } onClick={() => {showState(!show)}}>{show ? '-' : '+'}</span></h2>
        {show && <p className='popularq__content-purchaces-accordion-p'>
            {item.content}
        </p>}
    </li>
  )
}

export default PopularLi