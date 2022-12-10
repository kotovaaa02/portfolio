import React from 'react'
import './Testimonials.scss'
import TitleText from '../UI/TitleText/TitleText'


function Testimonials() {
    return (
        <div className='Testimonials'>
            <div className="Testimonials--container">
            <div className="Testimonials__title">
                    <h1 className='Testimonials__title--style'>testimonials</h1>
                </div>
                <div className="Testimonials--content">
                    <div className="Testimonials--item">
                        <TitleText
                            bold={false}
                            title='LINDA HUDSON'
                            text='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.'
                        />
                    </div>
                    <div className="Testimonials--item">
                        <TitleText
                            bold={false}
                            title='LINDA HUDSON'
                            text='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials