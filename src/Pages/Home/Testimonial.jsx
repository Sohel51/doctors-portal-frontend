import React from 'react'
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import ReviewCard from './ReviewCard'

const Testimonial = () => {
    const reviews = [
        {
            _id:1,
            name: 'Winson Herry',
            review: '',
            location: 'California',
            img: people1
        },
        {
            _id:2,
            name: 'Tom Cruise',
            review: '',
            location: 'California',
            img: people2
        },
        {
            _id:3,
            name: 'Winson Herry',
            review: '',
            location: 'California',
            img: people3
        },
    ];
    return (
        <section className='px-12'>
            <div className='my-12 flex justify-between'>
                <div>
                    <h2 className='font-bold text-cyan-500'>Testimonial</h2>
                    <h3 className='text-3xl'>What our Patients Says</h3>
                </div>
                <div>
                    <img src={quote} className='w-24 lg:w-48' alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review =><ReviewCard
                        key={review._id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>
        </section>
    )
}

export default Testimonial