import { format } from 'date-fns';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const [user, loading] = useAuthState(auth);
    const formattedDate = format(date, 'PP');
    const notify = () => toast("Wow so easy!");

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value,
        }

        // Sending the data in Backend (using fetch)
        fetch('https://doctors-portal-server-co6m.onrender.com/booking', {
            method: 'POST', // the method name use for sending the data
            headers: {
                'content-type': 'application/json' // which format we send the data
            },
            body: JSON.stringify(booking) // sending the data
        })
            .then(res => res.json()) // convert the data in json
            .then(data => {
                if(data.success){
                    toast(`Appointment is set, ${formattedDate} at ${slot}`)
                }else{
                    toast.error(`Already have an Appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                setTreatment(null); // to close the modal
            });
    }

    return (
        <section>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Booking For: {name}</h3>
                    <form onSubmit={handleBooking} className=" shadow-md rounded px-8 pt-6 pb-8">
                        <div className="mb-4">
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" disabled value={format(date, 'PP')} />
                        </div>
                        <div className="mb-4">
                            <select name="slot" className="select select-bordered w-full">
                                {
                                    slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                                }
                            </select>
                        </div>
                        <div className="mb-4">
                            <input name='name' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" disabled value={user?.displayName || ''} />
                        </div>
                        <div className="mb-4">
                            <input name='email' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" disabled value={user?.email || ''} />
                        </div>
                        <div className="mb-4">
                            <input name='phone' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Phone Number" />
                        </div>
                        <div className="mb-4">
                            <button className="btn btn-info uppercase w-full text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-400">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default BookingModal