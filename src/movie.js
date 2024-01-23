import React from 'react';
import Review from './review';
import ReviewForm from './reviewForm.js';

// main component that will hold all movie components

export default class Movie extends React.Component {
    constructor(props){
        super(props);
        this.movieList = props.movies
        // testing data
            console.log(this.movieList);
            console.log(props);
    }
    render() {
        return (
            <div>
                {this.movieList.map((movie, index) =>
                    <div key={index} className='card'>
                        {/* want image alt to say 'movie poster for {movie.movieName} but not sure how to concatenate*/}
                        <img className='card-img-top' src={movie.imgFile} alt='Movie poster'/>
                        <h5 className='card-title'>{movie.movieName}</h5>
                        <p className='card-body'>{movie.movieSynopsis}</p>
                    </div>)}
                <Review />
                <ReviewForm />
                
            </div>
        )
    }
}