import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncMovieDetails } from "../store/actions/movieActions";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie.movieDetails); // adjust based on your slice

  useEffect(() => {
    if (id) dispatch(getAsyncMovieDetails(id));
  }, [id, dispatch]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.detail.title}</h1>
      <p>{movie.detail.overview}</p>
      <h2>Recommendations</h2>
      <ul>
        {movie.recommendations.map((m) => (
          <li key={m.id}>{m.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetails;
