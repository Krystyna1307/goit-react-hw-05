import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const loadReviews = async () => {
      const data = await fetchMovieReviews(movieId);
      setReviews(data);
    };
    loadReviews();
  }, [movieId]);

  return (
    <div>
      {reviews.length === 0 ? (
        <p>No reviews available.</p>
      ) : (
        reviews.map((review) => <p key={review.id}>{review.author}</p>)
      )}
    </div>
  );
};
export default MovieReviews;
