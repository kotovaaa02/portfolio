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
                            text='On behalf of our company, I want to thank the guys for the quality work done. The site was made taking into account all our wishes and meets all the requirements. Thanks to the attentive attitude to all our wishes, the cooperation was comfortable, and as a result we got exactly the result we expected.'
                        />
                    </div>
                    <div className="Testimonials--item">
                        <TitleText
                            bold={false}
                            title='PAUL LARSON'
                            text='We express our gratitude to the company for fruitful cooperation. Together we are improving the site. Impressions from the cooperation are as positive as possible.
                            Technical tasks and ideas are being implemented. The expertise of the employees is at a high level. Employees are interested not only in income, they always deeply analyze site improvements and discuss them with us in as much detail as possible, offer their implementation options.'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials