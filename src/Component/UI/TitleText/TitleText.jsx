import React from 'react'
import './TitleText.scss'

function TitleText({title, text}) {
  return (
    <div className='TitleText'>
        <div className='TitleText__title'>
            <h3 className='TitleText__title--h3'>{title}</h3>
        </div>
        <div className='TitleText__text'>
            <p className='TitleText__text--p'>{text}</p>
        </div>
    </div>
  )
}

export default TitleText