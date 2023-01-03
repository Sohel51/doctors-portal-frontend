import React from 'react'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton'

const ContactForm = () => {
  return (
    <section style={{ background: `url(${appointment})` }}>
      <div className='text-center'>
        <h3 className='font-bold text-cyan-500 text-xl pt-7'>Contact Us</h3>
        <h2 className='text-3xl text-white'>Stay Connected With Us</h2>
      </div>
      <div className="text-center">
        <form className=" shadow-md rounded px-8 pt-6 pb-8">
          <div className="mb-4">
            <input className="shadow appearance-none border rounded w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email Address"/>
          </div>
          <div className="mb-4">
            <input className="shadow appearance-none border rounded w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Subject"/>
          </div>
          <div className="mb-6">
            <textarea className="shadow appearance-none border rounded w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40" type="text" placeholder="Your Message"/>
          </div>
          <PrimaryButton></PrimaryButton>
        </form>
      </div>
    </section>
  )
}

export default ContactForm