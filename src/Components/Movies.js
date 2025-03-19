import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../index.css";

import YouTube from "react-youtube";

function Movies(props) {
  const url = props.url;
  const title = props.title;
  const trailerId = props.trailerId;
  const setTrailerId = props.setTrailerId;
  const playTrailer = props.playTrailer;

  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    Axios.get(url)
      .then((output) => {
        setMoviesData(output.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="moviesSection">
      <h1>{title}</h1>
      <div className="moviesContainer">
        {moviesData.map((movie) => (
          <img
            onClick={() => playTrailer(movie.title)}
            key={movie.id}
            className="movieImages"
            src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
            alt={movie.title}
          />
        ))}
      </div>
      {trailerId && (
        <div className="trailerOverlay">
          <button className="closeButton" onClick={() => setTrailerId(null)}>
            ✖
          </button>
          <YouTube videoId={trailerId} />
        </div>
      )}
    </div>
  );
}

export default Movies;
