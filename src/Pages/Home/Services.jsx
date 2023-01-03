import React from 'react';
import Fluoride from '../../assets/images/fluoride.png';
import Cavity from '../../assets/images/cavity.png';
import Whitening from '../../assets/images/whitening.png';
import Treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Services = () => {
    return (
        <div className='px-12'>
            <div className="my-28">
                <p className='text-center text-sm text-info font-bold'>OUR SERVICES</p>
                <h2 className='text-center text-3xl'>Services We Provide</h2>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={Fluoride} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Fluoride Treatment</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card lg:max-w-lg  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={Cavity} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cavity Filling</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card lg:max-w-lg  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={Whitening} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Teeth Whitening</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen m-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={Treatment} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className=''>
                        <h1 className="md:text-3xl lg:text-5xl font-bold">Exceptional Dental Care, <br /> on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton></PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services