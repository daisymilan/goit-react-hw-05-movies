import PropTypes from 'prop-types';
import css from './MovieList.module.css';
import { MovieListItem } from 'components/MovieListItem/MovieListItem';

export const MovieList = ({ movies }) => {
  return (
    <div className={css.movieListContainer}>
      <ul className={css.movieList}>
        {movies.map(({ id, title, poster_path }) => (
          <MovieListItem
            key={id}
            id={id}
            title={title}
            posterPath={poster_path}
          />
        ))}
      </ul>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string, 
    })
  ).isRequired,
};
