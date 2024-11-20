import "./App.css";
import Axios from "./Components/Axios";
import Fetch from "./Components/Fetch";

function App() {
  return (
    <>
      <h2>Using Fetch</h2>
      <Fetch />
      <h2>Using Axios</h2>
      <Axios />
    </>
  );
}

export default App;
