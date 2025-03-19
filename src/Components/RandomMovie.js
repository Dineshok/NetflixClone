import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../index.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

function RandomMovie(props) {
  const url = props.url;
  const trailerId = props.trailerId;
  const setTrailerId = props.setTrailerId;
  const playTrailer = props.playTrailer;

  const [moviesData, setMoviesData] = useState([]);
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    Axios.get(url)
      .then((output) => {
        setMoviesData(output.data.results);
      })
      .catch((error) => {});
  }, []);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * moviesData.length));
  }, [moviesData]);

  return (
    <div>
      <div className="randomMovieContainer">
        {moviesData.length > 0 ? (
          <div className="randomMovieContent">
            <div className="randomMovieText">
              <h1 className="randomMovieTitle">
                {moviesData[randomNumber].title}
              </h1>
              {console.log(moviesData[randomNumber])}
              <p className="randomMovieDescription">
                {moviesData[randomNumber].overview}
              </p>
              <button
                className="watchNowButton"
                onClick={function () {
                  playTrailer(moviesData[randomNumber].title);
                }}
              >
                ▶ Watch Now
              </button>
            </div>
            <div className="randomMoviePosterContainer">
              <img
                className="randomMoviePoster"
                src={`https://image.tmdb.org/t/p/w185/${moviesData[randomNumber].poster_path}`}
              />
            </div>
          </div>
        ) : null}
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

export default RandomMovie;
