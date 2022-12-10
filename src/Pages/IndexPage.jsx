import React from 'react'
import Header from '../Component/Header/Header'
import Mission from '../Component/Mission/Mission'
import OurTeam from '../Component/OurTeam/OurTeam'
import AboutUs from '../Component/AboutUs/AboutUs'
import DescriptionTeam from '../Component/DescriptionTeam/DescriptionTeam'
import Testimonials from '../Component/Testimonials/Testimonials'
import FooterItem from '../Component/FooterItem/FooterItem'



function IndexPage() {
  return (
    <div>
      <Header/>
      <OurTeam/>
      <Mission/>
      <AboutUs/>
      {/* <Portfolio/> */}
      <DescriptionTeam/>
      <Testimonials/>
      <FooterItem/>
    </div>
  )
}

export default IndexPage
