import React from 'react'
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton'

const MakeAppointment = () => {
    return (
        <section style={{ background: `url(${appointment})` }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <div className="p-4">
                    <h3 className='text-xl text-cyan-500 font-bold'>Appointment</h3>
                    <h2 className='text-3xl text-white pt-6'>Make an Appointment</h2>
                    <p className='text-white py-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor rerum inventore aut facilis provident accusantium nihil, qui fugiat distinctio dolore dolores minus dignissimos mollitia odit? Aut magni totam, optio accusantium, accusamus ullam, est dolorem deleniti ipsa velit sunt! Illum saepe sequi, ullam maxime corporis sint totam ea soluta incidunt ipsum.</p>
                    <PrimaryButton></PrimaryButton>
                </div>

            </div>
        </section>
    )
}

export default MakeAppointment