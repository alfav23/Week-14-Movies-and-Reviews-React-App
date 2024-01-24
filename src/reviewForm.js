import React from 'react';
import Stars from './stars'

export default class ReviewForm extends React.Component {
    constructor(props){
        super(props);
        console.log('These are the reviews and movies', props);
    }

    submitReview = () => {
        let date = new Date();
        // get the value of the review text area
        let reviewData = document.getElementById(`review-text-box-${this.props.movie.id}`).value;
        let starData = document.getElementById(`inputGroupSelect-${this.props.movie.id}`).value;
        let userData = document.getElementById(`review-user-input-${this.props.movie.id}`).value;
        console.log('this is a star test: ', starData);
        let newReview = {reviewText: reviewData, time: date.toDateString(), stars: starData, userName: userData}
        this.props.changeState(newReview);
    }
    render() {
        return (
            <div id='review-form'>
                <p className='text-start text-secondary'>Add A Review: </p>
                <Stars movie = {this.props.movie} />
                <div id='review-input' className="input-group mb-3">
                    <label htmlFor='review-user-input'>Create a username</label>
                    <input id={`review-user-input-${this.props.movie.id}`} placeholder='Enter a username...'></input>
                    <label htmlFor='review-text-box'> What did you think?</label>
                    <textarea id={`review-text-box-${this.props.movie.id}`} placeholder='Type your review...'></textarea>
                    <button onClick={this.submitReview} className='btn btn-secondary'>Submit Review</button>
                </div>
            </div>
        )
    }
}