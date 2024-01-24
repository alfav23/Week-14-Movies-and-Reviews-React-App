import './App.css';
import Movie from './movie';

// array of movies with name, synopsis, and an average score based on stars that will be updated
let movieList = [
  {
    id: 1,
    movieName: 'Locked-in',
    movieSynopsis: 'A movie about passion and DEATH.',
    overallStars: 0,
    imgURL: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABc_GCJSfWt_NaZ2xmf4X58h6IJTIXcmH3GSW39wAOX3XpSiIMSjFv9jW7Hv15MFKdKA68fTw6tfzPQtMRfLTVHXmpLK4R4rPnctm.jpg?r=ce7',
  },
  {
    id: 2,
    movieName: 'Saltburn',
    movieSynopsis: 'Another movie about passion and DEATH.',
    overallStars: 0,
    imgURL:'https://m.media-amazon.com/images/M/MV5BMWU0ZWZkMzgtNTY0YS00YjU3LThhNzgtZGEzOTdiNzdkMjA4XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
  },
  {
    id: 3,
    movieName: 'Barbie',
    movieSynopsis: 'A movie about toxic masculinity...or toxic femininity...or...',
    overallStars: 0,
    imgURL:'https://www.kenosha.com/wp-content/uploads/2023/08/et00072466-jjadjvahwx-landscape-copy-980x653.png',
  },
  {
    id: 4,
    movieName: 'Renfield',
    movieSynopsis: "The peak of Nicholas Cages' Career",
    overallStars: 0,
    imgURL:'https://m.media-amazon.com/images/I/71CIBa5TMAL._AC_UF894,1000_QL80_.jpg',
  },
];

function App() {
  return (
    <div className="App text-white">
      {movieList.map((movie, index) => (
       <Movie key={index} movies = {movie} /> 
      ))}
    </div>
  );
}

export default App;
