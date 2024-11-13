import "./App.css";
import Dogs from "./components/Dogs";
import Character from "./components/Character";
import doggo from "./assets/doggo.png";
import { useState } from "react";
import { results } from "./index";

function App() {
  const [dog, setDog] = useState({ name: "Betty", age: 9 });
  const [characters, setCharacters] = useState(results);
  console.log(results);
  return (
    <>
      <Dogs dog={dog} size={200} url={doggo} />
      {characters &&
        characters.map((character) => {
          return <Character key={character.id} character={character} />;
        })}
    </>
  );
}

export default App;
