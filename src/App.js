import './App.css';
import Movie from './movie';
import './images/Locked-in-img.jpg';

// array of movies with name, synopsis, and an average score based on stars that will be updated
let movieList = [
  {
    movieName: 'Locked-in',
    movieSynopsis: 'A movie about passion and DEATH',
    overallStars: 0,
  },
  {
    movieName: 'Saltburn',
    movieSynopsis: 'Another movie about passion and DEATH',
    overallStars: 0,
  },
  {
    movieName: 'Barbie',
    movieSynopsis: 'A movie about toxic masculinity...or toxic femininity...or...',
    overallStars: 0,
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
