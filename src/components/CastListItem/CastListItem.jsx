import PropTypes from 'prop-types';
import css from './CastListItem.module.css';
import { Link } from 'react-router-dom';

export const CastListItem = ({ id, profilePath, originalName, name, character }) => {
  return (
    <li className={css.castItem}>
      <img
        className={css.profileImage}
        src={profilePath ? `https://image.tmdb.org/t/p/w300${profilePath}` : 'https://via.placeholder.com/300'}
        alt={name}
      />
      <h3>{name}</h3>
      <p>{originalName}</p>
      <p>{character}</p>
    </li>
  );
};

CastListItem.propTypes = {
  id: PropTypes.number.isRequired,
  profilePath: PropTypes.string,
  originalName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
