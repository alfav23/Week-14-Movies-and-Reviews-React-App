import './App.css';
import Movie from './movie';
import './images';

// array of movies with name, synopsis, and an average score based on stars that will be updated
let movieList = [
  {
    movieName: 'Locked-in',
    movieSynopsis: 'A movie about passion and DEATH',
    overallStars: 0,
    imgFile: './images/Locked-in-img.jpg',
  },
  {
    movieName: 'Saltburn',
    movieSynopsis: 'Another movie about passion and DEATH',
    overallStars: 0,
    imgFile:'./images/SaltburnMovie.jpg',
  },
  {
    movieName: 'Barbie',
    movieSynopsis: 'A movie about toxic masculinity...or toxic femininity...or...',
    overallStars: 0,
    imgFile:'./images/BarbieMovie.jpg',
  },
];

function App() {
  return (
    <div className="App">
      <Movie movies = {movieList} />
    </div>
  );
}

export default App;
