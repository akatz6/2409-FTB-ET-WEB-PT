// import "./App.css";

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [update, setUpdate] = useState(0);
  const [updateTwo, setUpdateTwo] = useState(0);
  // useEffect(() => {
  //   console.log("this is going to run every time something happens");
  // });

  const getWithFetch = async () => {
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character?page=1"
      );
      const data = await response.json();
      console.log("this uses fetch");
      console.log(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const getWithAxios = async () => {
    try {
      const { data } = await axios.get(
        "https://rickandmortyapi.com/api/character?page=2"
      );
      console.log("this uses axios");
      console.log(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getWithFetch();
    getWithAxios();
  }, []);

  // useEffect(() => {
  //   setUpdateTwo(updateTwo + 1);
  // }, [updateTwo]);

  const click = () => {
    setUpdate(update + 1);
  };

  // const clickTwo = () => {
  //   setUpdateTwo(updateTwo + 1);
  // };

  return (
    <>
      <h1>This is going to be about useEffect</h1>
      <button type="button" className="btn btn-primary" onClick={click}>
        {update}
      </button>
      <button type="button" className="btn btn-primary">
        {updateTwo} again
      </button>
    </>
  );
}

export default App;
