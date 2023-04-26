import React from "react";
import { movies } from "../data";

function Movies() {
  
  return <div>
    <h1>Movies Page</h1>    
    {movies.map((movie) => {
    return <div key={movie.title}>
      <h2>{movie.title}</h2>
      <h2>{movie.time}</h2>
      <ul>{movie.genres.map((genre) => (
        <li key={genre}>{genre}</li>

      ))}</ul>
    </div>
    })}    
  </div>;
}

export default Movies;
