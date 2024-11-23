import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then((data) => setReviews(data.results));
  }, [movieId]);

  return (
    <div>
      {reviews.length === 0 ? (
        <p>No reviews available.</p>
      ) : (
        reviews.map((review) => (
          <div key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MovieReviews;
