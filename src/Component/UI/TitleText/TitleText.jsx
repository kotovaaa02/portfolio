import React from 'react'
import './TitleText.scss'

function TitleText({title, text, position = true, bold = true}) {
  return (
    <div className='TitleText'>
      <div className={position?'TitleText__title':'TitleText__title--right'}>
          <h3 className={bold?'TitleText__title--h3':'TitleText__title--light'}>{title}</h3>
        </div>
        <div className='TitleText__text'>
            <p className={position?'TitleText__text--p':'TitleText__text--right'}>{text}</p>
        </div>
    </div>
  )
}

export default TitleText