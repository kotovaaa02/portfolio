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
                        text='we are young designers and programmers who design things, write cod, create the content and focus on brand identity, unique design and web development.'
                    />
                </div>
                <div className="AboutUs--item">
                    <TitleText
                        position={false}
                        title='what we do'
                        text='we are engaged in designing a unique design and developing a modern website for an integrated approach to promoting your business, as well as recruiting and training new members of our team to promote in the field of information technology.'
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutUs