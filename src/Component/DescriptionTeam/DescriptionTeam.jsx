import React from 'react'
import './DescriptionTeam.scss'
import TitleText from '../UI/TitleText/TitleText'


function DescriptionTeam() {
    return (
        <div className='DescriptionTeam'>
            <div className="DescriptionTeam--container">
                <div className="DescriptionTeam--content">
                    <div className="DescriptionTeam--item">
                        <TitleText
                            bold={false}
                            title='FEDYANIN STEPAN'
                            text='I’m passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations.'
                        />
                    </div>
                    <div className="DescriptionTeam--item">
                        <TitleText
                            bold={false}
                            title='KOSTINA POLINA'
                            text='I’m a multidisciplinary designer who focuses on telling my clients’ stories visually, through enjoyable and meaningful experiences. I specialize in responsive websites and functional user interfaces.'
                        />
                    </div>
                </div>
                <div className="DescriptionTeam__title">
                    <h1 className='DescriptionTeam__title--style'>our team</h1>
                </div>
            </div>
        </div>
    )
}

export default DescriptionTeam