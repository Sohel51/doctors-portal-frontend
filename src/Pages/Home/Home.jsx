import React from 'react'
import Banner from './Banner'
import ContactForm from './ContactForm'
import { Info } from './Info'
import MakeAppointment from './MakeAppointment'
import Services from './Services'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <>
       <Banner></Banner>
       <Info></Info>
       <Services></Services>
       <MakeAppointment></MakeAppointment>
       <Testimonial></Testimonial>
       <ContactForm></ContactForm>
    </>
 
  )
}

export default Home