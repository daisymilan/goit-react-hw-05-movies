import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'api/api';
import { CastListItem } from '../CastListItem/CastListItem'; 
import css from './CastList.module.css';

const CastList = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await fetchMovieCast(movieId);
        setCast(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <>
      {cast.length !== 0 ? (
        <div>
          <h2>Movie Cast</h2>
          <ul className={css.castList}>
            {cast.map(({ id, profile_path, original_name, name, character }) => (
              <CastListItem
                key={id}
                id={id}
                profilePath={profile_path}
                originalName={original_name}
                name={name}
                character={character} 
              />
            ))}
          </ul>
        </div>
      ) : (
        <div>No cast information available</div>
      )}
    </>
  );
};

export default CastList;
