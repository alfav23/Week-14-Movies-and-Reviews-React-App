import React from 'react'

// review to determine how review populates and where input information is stored

export default class Review extends React.Component {
    constructor(props){
        super(props);
        console.log('review props:', props)
        this.review = props.review
    }
    render(){
        return(
            <div className='text-start text-secondary'>
                    <div id='review-cards' className='card bg-light text-secondary'>
                        {/* refer to reviewForm for variables */}
                        <p className='card-head'>by @{this.review.userName}</p>
                        <p className='card-body'> {this.review.stars} stars<br></br>{this.review.reviewText}</p>
                        <p className='card-footer'>{this.review.time}</p>
                    </div>
            </div>
        )
    }
}