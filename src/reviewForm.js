import React from 'react';
import Stars from './stars'

// review form to receive user input for reviews

export default class ReviewForm extends React.Component {
    constructor(props){
        super(props);
        console.log('These are the reviews and movies', props);
    }

    submitReview = () => {
        let date = new Date();
        // get the value of the review text area stored in reviewData
        let reviewData = document.getElementById(`review-text-box-${this.props.movie.id}`).value;
        // get the star rating data stored in starData
        let starData = document.getElementById(`inputGroupSelect-${this.props.movie.id}`).value;
        // get the username input value stored in userData
        let userData = document.getElementById(`review-user-input-${this.props.movie.id}`).value;
        console.log('this is a star test: ', starData);
        let newReview = {reviewText: reviewData, time: date.toDateString(), stars: starData, userName: userData}
        this.props.changeState(newReview);
    }
    render() {
        return (
            <div id='review-form'>
                <p className='text-start text-secondary'>Add A Review: </p>
                {/* passing movies into Stars so that it knows the movie id */}
                <Stars movie = {this.props.movie} />
                <div id='review-input' className="input-group mb-3">
                    <label htmlFor='review-user-input'>Create a username</label>
                    {/* giving each instance of input a unique id using movie id so that react can render properly */}
                    <input id={`review-user-input-${this.props.movie.id}`} placeholder='Enter a username...'></input>
                    <label htmlFor='review-text-box'> What did you think?</label>
                    <textarea id={`review-text-box-${this.props.movie.id}`} placeholder='Type your review...'></textarea>
                    {/* onclick submit Review button to change state of this.state (reviews) array and populate reviews*/}
                    <button onClick={this.submitReview} className='btn btn-secondary'>Submit Review</button>
                </div>
            </div>
        )
    }
}