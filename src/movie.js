import React from 'react';
import Review from './review';
import ReviewForm from './reviewForm.js';

// to determine date
let date = new Date();

// main component that will hold all movie components

export default class Movie extends React.Component {
    constructor(props){
        super(props);
        // reviews array
        this.state = {
            reviews: [
            {
              userName: 'alyssaf2000',
              time: date.toDateString(),
              reviewText: 'This movie was boring.',
              stars: 2,
            },
            {
              userName: 'notthesamepersonipromise',
              time: date.toDateString(),
              reviewText: 'I also thought this movie was boring.',
              stars: 1,
            },
            {
              userName: 'yetanotheruser',
              time: date.toDateString(),
              reviewText: 'I liked this one.',
              stars: 5,
            },
          ]
        };

        this.movieList = props.movies
        // testing data
            console.log(this.movieList);
            console.log(props);
    }

    changeState = (reviewData) => {
        this.setState({reviews: reviewData});
        console.log('State has been changed');
    }
    render() {
        return (
            <div>
                {this.movieList.map((movie, index) =>
                    <div key={index} id='movie-cards' width='10rem' className='card bg-light text-secondary'>
                        <img className='card-img-top' src={movie.imgURL} alt='Movie poster'/>
                        <h5 className='card-title'>{movie.movieName}</h5>
                        <p className='card-body'>Synopsis: <br></br> {movie.movieSynopsis}</p>
                        <ReviewForm reviews = {this.state.reviews} movie = {movie} changeState={this.changeState} />
                        <Review reviews = {this.state.reviews} />
                    </div>)}  
            </div>
        )
    }
}