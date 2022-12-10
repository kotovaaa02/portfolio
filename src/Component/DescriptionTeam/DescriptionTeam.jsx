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
                            text='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.'
                        />
                    </div>
                    <div className="DescriptionTeam--item">
                        <TitleText
                            bold={false}
                            title='KOSTINA POLINA'
                            text='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.'
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