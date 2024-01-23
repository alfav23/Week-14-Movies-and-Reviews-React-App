import React from 'react'

export default class Review extends React.Component {
    constructor(props){
        super(props)
        this.reviews = props.reviews
    }
    render(){
        return(
            <div className='text-start text-secondary'>
                Reviews:
                {this.reviews.map((review, index) =>
                    <div key={index} id='review-cards' className='card bg-light text-secondary'>
                        <p className='card-head'>by @{review.userName}</p>
                        <p className='card-body'> {review.stars} stars<br></br>{review.reviewText}</p>
                        <p className='card-footer'>{review.time}</p>
                    </div>)}
            </div>
        )
    }
}