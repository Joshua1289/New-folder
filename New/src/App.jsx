import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MovieList} />
        <Route path="/movie/:id" component={MovieDetails} />
      </Switch>
    </Router>
  );
}

import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <Link to={`/movie/${movie.id}`}>
      <h3>{movie.title}</h3>
      {/* Other details like poster, etc. */}
    </Link>
  </div>
);
import { useParams, useHistory } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const history = useHistory();

  // Fetch movie details using `id` and display description and trailer link

  const handleBack = () => {
    history.push('/');
  };

  return (
    <div className="movie-details">
      <h2>Movie Details</h2>
      {/* Display movie details based on `id` */}
      <button onClick={handleBack}>Back to Home</button>
    </div>
  );
};
