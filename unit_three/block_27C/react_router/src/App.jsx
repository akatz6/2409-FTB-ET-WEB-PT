import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Register from "./components/Register/Register";
import Lost from "./components/Lost";
import User from "./components/User/User";
import Users from "./components/Users/Users";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/users" element={<Users />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="*" element={<Lost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
