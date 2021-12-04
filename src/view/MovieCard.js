import React, { useState } from "react";

export default function MovieCard({ movie, deleteFn, toggleLike }) {
  const [isLiked, setisLiked] = useState(false);

  const isLikeFn = ()=> {
    toggleLike(movie.id, !isLiked)
    setisLiked(!isLiked)
  }

  return (
    <div key={movie.id}>
      <h3> Title : {movie.title} </h3>
      <p> category : {movie.category} </p>
      <p>
        {" "}
        Likes : {movie.likes}/ Dislikes : {movie.dislikes}{" "}
      </p>
      <button onClick={() => deleteFn(movie.id)}> Delete </button>
      <button onClick={() => isLikeFn()}>
        {isLiked ? "Dislike" : "Like"}{" "}
      </button>
    </div>
  );
}
