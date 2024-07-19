import PropTypes from 'prop-types';
import css from './MovieListItem.module.css';
import { Link, useLocation } from 'react-router-dom';

export const MovieListItem = ({ id, title, posterPath }) => {
  const location = useLocation();

  return (
    <li className={css.movieItem}>
      <Link
        to={`/movies/${id}`}
        state={{ from: location, movieTitle: title }}
        className={css.movieLink}
      >
        <img
          src={`https://image.tmdb.org/t/p/w300${posterPath}`} 
          alt={title}
          className={css.movieImage}
        />
        <h3 className={css.movieTitle}>{title}</h3>
      </Link>
    </li>
  );
};

MovieListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string, 
};
