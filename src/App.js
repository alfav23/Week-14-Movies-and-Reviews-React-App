import './App.css';
import Movie from './movie'
import './images'

let MovieList = [
  {
    movieName: 'Locked-in',
    movieSynopsis: 'A movie about passion and DEATH',
    overallReview: 0,
  },
  {
    movieName: 'Saltburn',
    movieSynopsis: 'Another movie about passion and DEATH',
    overallReview: 0,
  },
  {
    movieName: 'Barbie',
    movieSynopsis: 'A movie about toxic masculinity...or toxic femininity...or...',
    overallReview: 0,
  },
]

function App() {
  return (
    <div className="App">
      <Movie movies = {MovieList} />
    </div>
  );
}

export default App
