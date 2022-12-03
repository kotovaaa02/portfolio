import React from 'react'
import TitleText from '../UI/TitleText/TitleText'
import keyboard from '../../Resources/keyboard.svg'
import './OurTeam.scss'

function OurTeam() {
    return (
        <div className='OurTeam'>
            <div className='OurTeam__container'>
                <div className="OurTeam__description">
                    <div className="OurTeam__description--number">
                        <p className='OurTeam__number--style'>01</p>
                    </div>
                    <div className="OurTeam__description--content">
                        <div className="qweq">
                            <TitleText
                                title='our team'
                                text='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.'
                            />
                        </div>
                    </div>
                </div>
                <div className="OurTeam__preview">
                    <div className="OurTeam__preview--img">
                        <img src={keyboard} alt="keyboard" />
                    </div>
                    <div className="OurTeam__preview--text">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam