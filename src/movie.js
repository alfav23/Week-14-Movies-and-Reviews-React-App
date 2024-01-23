import React from 'react';
import Review from './review';
import ReviewForm from '.reviewForm';
import './images';

// main component that will hold all movie components

export default class Movie extends React.Component {
    constructor(props){
        super(props);
        this.moviesList = props.movies
        // testing data
            console.log(this.moviesList);
    }
    render() {
        return (
            <div>
                <card className='card'>
                    <img className='card-img-top' src='./images/Locked-in-img.jpg' alt='Picture of movie poster for the movie "Locked-in"'/>
                    <section className='card-head'>
                    </section>
                    <MovieImg />
                    <section className='card-body'>
                        {...this.props.movies.movieSynopsis}
                    </section>
                    <Review />
                    <ReviewForm />
                </card>

            </div>
        )
    }
}