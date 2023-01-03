import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

export const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <div className="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-cyan-500 to-blue-400 p-3 lg:px-3">
                <figure><img src={clock} alt="Album" /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title">Openning Hours</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl bg-base-content p-3 lg:px-3">
                <figure><img src={marker} alt="Album" /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title">Visit Our Location</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-cyan-500 to-blue-400 p-3 lg:px-3">
                <figure><img src={phone} alt="Album" /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title">Contact Us Now</h2>
                    <p>+880 158-586546</p>
                </div>
            </div>
        </div>
    )
}
