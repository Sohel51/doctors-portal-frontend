import React from 'react'

const ReviewCard = ({review}) => {
    return (
        <section>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et reprehenderit numquam quidem excepturi laudantium. Eos?</p>
                    <div className="mt-2">
                        <div className="avatar">
                            <div className="w-32 rounded-full ring ring-cyan-500 ring-offset-base-100 mr-5">
                                <img src={review.img} alt=""/>
                            </div>
                            <div>
                                <h4 className='text-xl'>{review.name}</h4>
                                <p>{review.location}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReviewCard