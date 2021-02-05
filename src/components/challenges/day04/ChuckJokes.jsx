import React, { useState } from "react";
import ChuckChild from "./ChuckChild";

const ChuckJokes = () => {
  const [joke, setJoke] = useState("");

  function fetchJokes() {
    const url = "https://api.chucknorris.io/jokes/random";
    fetch(url)
      .then((response) => response.json())
      .then((json) => setJoke(json.value));
  }
  return (
    <div>
      ChuckJokes Here <button onClick={fetchJokes}>Click for Jokes</button>
      <ChuckChild passedJoke={joke} />
    </div>
  );
};

export default ChuckJokes;
