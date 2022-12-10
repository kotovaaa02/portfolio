import React from 'react'
import './AboutUs.scss'
import TitleText from '../UI/TitleText/TitleText'


function AboutUs() {
    return (
        <div className='AboutUs'>
            <div className="AboutUs--container">
                <div className="AboutUs--item">
                    <TitleText
                        position={false}
                        title='who we are'
                        text='Strategic planning is an organizations process for defining their strategy so that they can accomplish specific goals and objectives. We offer affordable custom website design done by professionals.'
                    />
                </div>
                <div className="AboutUs--item">
                    <TitleText
                        position={false}
                        title='what we do'
                        text='We can help you to boost engagement with your visitors by ensuring that people have access to the information that they. A business concept is a statement that describes the reach and reason of existence of a given business idea.'
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutUs