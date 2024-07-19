import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'api/api';
import css from './ReviewsList.module.css'; 

const ReviewsList = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetchMovieReviews(movieId);
        setReviews(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div className={css.reviewsContainer}>
      <h2 className={css.title}>Reviews</h2>
      {reviews.length ? (
        <ul className={css.reviewsList}>
          {reviews.map(({ id, author, content }) => (
            <li key={id} className={css.reviewItem}>
              <h3 className={css.author}>{author}</h3>
              <p className={css.content}>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noReviews}>No reviews available</p>
      )}
    </div>
  );
};

export default ReviewsList;
