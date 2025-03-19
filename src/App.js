import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Movies from "./Components/Movies";
import RandomMovie from "./Components/RandomMovie";
import movieTrailer from "movie-trailer";

function App() {
  const [trailerId, setTrailerId] = useState(null);
  const [isTvShows, setIsTvShows] = useState(false); // New state to track TV Shows

  function playTrailer(title) {
    movieTrailer(title)
      .then(function (info) {
        const id = new URLSearchParams(new URL(info).search).get("v");
        setTrailerId(id);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // Determine the appropriate URL based on whether Movies or TV Shows is active
  const movieApiUrls = {
    trending:
      "https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=455e90ca3c86239e466d91a6b1e15a7b",
    topRated:
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=455e90ca3c86239e466d91a6b1e15a7b",
    upcoming:
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&api_key=455e90ca3c86239e466d91a6b1e15a7b",
    discover:
      "https://api.themoviedb.org/3/discover/movie?language=en-US&api_key=455e90ca3c86239e466d91a6b1e15a7b",
  };

  const tvApiUrls = {
    trending:
      "https://api.themoviedb.org/3/tv/latest?language=en-US&api_key=455e90ca3c86239e466d91a6b1e15a7b",
    topRated:
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&api_key=455e90ca3c86239e466d91a6b1e15a7b",
    upcoming:
      "https://api.themoviedb.org/3/tv/airing_today?language=en-US&api_key=455e90ca3c86239e466d91a6b1e15a7b", // TV series airing today
    discover:
      "https://api.themoviedb.org/3/discover/tv?language=en-US&api_key=455e90ca3c86239e466d91a6b1e15a7b",
  };

  const activeApiUrls = isTvShows ? tvApiUrls : movieApiUrls;

  return (
    <div>
      <div className="topContainer">
        <img
          src="https://media.idownloadblog.com/wp-content/uploads/2018/01/Netflix-Logo.png"
          style={{ width: "250px" }}
        ></img>
        <NavLink to="/" onClick={() => setIsTvShows(false)}>
          Home
        </NavLink>
        <NavLink to="/movies" onClick={() => setIsTvShows(false)}>
          Movies
        </NavLink>
        {/* <NavLink to="/tvShows" onClick={() => setIsTvShows(true)}>
          Tv Shows
        </NavLink>
        <NavLink to="/login">Login</NavLink> */}
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<HomePage />}></Route>
        <Route path="/movies" element={<HomePage />}></Route>
        <Route path="/tvShows" element={<HomePage />}></Route>
      </Routes>
      <RandomMovie
        url={isTvShows ? tvApiUrls.topRated : movieApiUrls.topRated}
        trailerId={trailerId}
        setTrailerId={setTrailerId}
        playTrailer={playTrailer}
      />
      <Movies
        url={activeApiUrls.trending}
        title={isTvShows ? "Trending TV Shows" : "Trending Movies"}
        trailerId={trailerId}
        setTrailerId={setTrailerId}
        playTrailer={playTrailer}
      />
      <Movies
        url={activeApiUrls.topRated}
        title={isTvShows ? "Top Rated TV Shows" : "Top Rated Movies"}
        trailerId={trailerId}
        setTrailerId={setTrailerId}
        playTrailer={playTrailer}
      />
      <Movies
        url={activeApiUrls.upcoming}
        title={isTvShows ? "Upcoming TV Shows" : "Upcoming Movies"}
        trailerId={trailerId}
        setTrailerId={setTrailerId}
        playTrailer={playTrailer}
      />
      <Movies
        url={activeApiUrls.discover}
        title={isTvShows ? "Discover TV Shows" : "Discover Movies"}
        trailerId={trailerId}
        setTrailerId={setTrailerId}
        playTrailer={playTrailer}
      />
    </div>
  );
}

export default App;

/* import React, { useState } from "react";
import Login from "./Components/Login";
import { Routes, Route, Link, BrowserRouter, NavLink } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Movies from "./Components/Movies";
import RandomMovie from "./Components/RandomMovie";
import movieTrailer from "movie-trailer";

function App() {
  const [trailerId, setTrailerId] = useState(null);

  function playTrailer(title) {
    movieTrailer(title)
      .then(function (info) {
        const id = new URLSearchParams(new URL(info).search).get("v");
        setTrailerId(id);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <div className="topContainer">
        <img
          src="https://media.idownloadblog.com/wp-content/uploads/2018/01/Netflix-Logo.png"
          style={{ width: "250px" }}
        ></img>
        <NavLink to="/"></NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/tvShows">Tv Shows</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<HomePage />}></Route>
        <Route path="/movies" element={<HomePage />}></Route>
        <Route path="/tvShows" element={<HomePage />}></Route>
      </Routes>
      <RandomMovie
        url="https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=455e90ca3c86239e466d91a6b1e15a7b"
        trailerId={trailerId}
        setTrailerId={setTrailerId}
        playTrailer={playTrailer}
      ></RandomMovie>
      <Movies
        url="https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=455e90ca3c86239e466d91a6b1e15a7b"
        title="Trending Movies"
        trailerId={trailerId}
        setTrailerId={setTrailerId}
        playTrailer={playTrailer}
      ></Movies>
      <Movies
        url="https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=455e90ca3c86239e466d91a6b1e15a7b"
        title="Top Rated"
        trailerId={trailerId}
        setTrailerId={setTrailerId}
        playTrailer={playTrailer}
      ></Movies>
      <Movies
        url="https://api.themoviedb.org/3/movie/upcoming?language=en-US&api_key=455e90ca3c86239e466d91a6b1e15a7b"
        title="Upcoming"
        trailerId={trailerId}
        setTrailerId={setTrailerId}
        playTrailer={playTrailer}
      ></Movies>
      <Movies
        url="https://api.themoviedb.org/3/discover/movie?language=en-US&api_key=455e90ca3c86239e466d91a6b1e15a7b"
        title="Discover"
        trailerId={trailerId}
        setTrailerId={setTrailerId}
        playTrailer={playTrailer}
      ></Movies>
    </div>
  );
}

export default App;
 */
