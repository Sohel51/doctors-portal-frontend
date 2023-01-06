import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {

    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointments(data));
        }
    }, [user])


    return (
        <section>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>NAME</th>
                                <th>DATE</th>
                                <th>TREATMENT</th>
                                <th>TIME</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                appointments.map((a, index) => 
                                <tr>
                                    <th>{index+1}</th>
                                    <td>{a.patientName}</td>
                                    <td>{a.date}</td>
                                    <td>{a.treatment}</td>
                                    <td>{a.slot}</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default MyAppointment