import React from 'react';
import Stars from './stars'

export default class ReviewForm extends React.Component {
    constructor(props){
        super(props);
        console.log('These are the reviews and movies', props);
    }

    submitReview = () => {
        // get the value of the review text area
        let reviewData = document.getElementById('review-text-box').value;
        this.props.changeState(reviewData);
    }
    render() {
        return (
            <div id='review-form'>
                <p className='text-start text-secondary'>Add A Review: </p>
                <Stars />
                <div id='review-input' className="input-group mb-3">
                    <label htmlFor='review-text-box'> What did you think?</label>
                    <textarea id='review-text-box' placeholder='Type your review...'></textarea>
                    <button onClick={this.submitReview} className='btn btn-secondary'>Submit Review</button>
                </div>
            </div>
        )
    }
}