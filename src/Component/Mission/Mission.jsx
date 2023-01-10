import React from 'react'
import './Mission.scss'
const NumberedTitle = ({number, title}) =>{
    return(
        <div className="NumberedTitle">
            <div className="NumberedTitle__block">
                <p className='NumberedTitle__block--num'>{number}</p>
            </div>
            <div className="NumberedTitle__block">
               <p className='NumberedTitle__block--description'>{title}</p>
            </div>
        </div>
    )
}

function Mission() {
  return (
    <div className='Mission'>
        <div className="Mission__title">
            <h1 className='Mission__title--style'>mission</h1>
        </div>
        <div className="Mission__content">
            <div className="Mission__content--item">
                <NumberedTitle number="1" title="MANAGEMENT"/>
                <div className="Mission__item--description">
                    <p className='Mission__description--text'>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <div className="Mission__content--item">
                <NumberedTitle number="2" title="HIGH QUALITY"/>
                <div className="Mission__item--description">
                    <p  className='Mission__description--text'>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <div className="Mission__content--item">
                <NumberedTitle number="3" title="SUPPORT"/>
                <div className="Mission__item--description">
                    <p  className='Mission__description--text'>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mission