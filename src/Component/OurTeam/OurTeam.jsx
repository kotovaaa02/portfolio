import React from 'react'
import TitleText from '../UI/TitleText/TitleText'
import logo from '../../Resources/logo.png'
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
                                text='our start-up company is engaged in the creation of websites and their promotion on the web. our team has all the necessary initial skills to develop and implement any Internet solutions. a little work experience and a lot of successful projects.'
                            />
                        </div>
                    </div>
                </div>
                <div className="OurTeam__preview">
                    <div className="OurTeam__preview--img">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="OurTeam__preview--text">
                        <p>education : International Institute of Design and Service - MIDiS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam