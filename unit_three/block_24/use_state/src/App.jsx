import { useState } from "react";
import "./App.css";
import { random, results } from "./index";

function App() {
  const [count, setCount] = useState(0);
  const [countWithParameter, setCountWithParameter] = useState(0);
  const [countInAFunction, setCountInAFunction] = useState(0);
  const [characters, setCharacter] = useState(results);

  const changeValue = () => {
    setCountInAFunction(countInAFunction + 1);
  };

  const changeWithParam = (num) => {
    setCountWithParameter(countWithParameter + num);
  };

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="card">
        <button className="btn btn-primary" onClick={changeValue}>
          count is {countInAFunction} and changed in a function
        </button>
      </div>
      <div className="card">
        <button className="btn btn-success" onClick={() => changeWithParam(3)}>
          count is {countWithParameter} and changed in a function with parameter
        </button>
      </div>
      {characters &&
        characters.map((character) => {
          return (
            <div key={character.id}>
              <h3>{character.name}</h3>
              <img src={character.image} alt={character.name} />
              <p>Species: {character.species}</p>
            </div>
          );
        })}
    </>
  );
}

export default App;
