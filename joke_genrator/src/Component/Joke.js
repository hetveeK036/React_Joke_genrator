import React, { useState } from "react";
import Button from "./Button.js";

const Joke = () => {
  const [jokes, setJokes] = useState("");

  const fetchAPI = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((res) => res.json())
      .then((data) => setJokes(data.joke));
  };
  return (
    <div className="jokes">
      <h3> Random Jokes Genrator Using React and Jokes API.</h3>
      <Button callAPI={fetchAPI} />
      <p>{jokes}</p>
    </div>
  );
};

export default Joke;
