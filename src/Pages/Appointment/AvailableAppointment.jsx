import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');
    useEffect(() => {
        fetch(`https://doctors-portal-server-co6m.onrender.com/available?date=${formattedDate}`)
            .then(res => res.json())
            .then(data => setServices(data));
    });

    return (
        <section>
            <div className='text-xl text-center mt-12'>
                <h4 className="text-cyan-500 font-bold">
                    Available Appointments on {format(date, 'PP')}
                </h4>
                <h4 className='text-gray-400'>Please Select A Service...</h4>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>}
        </section>
    )
}

export default AvailableAppointment