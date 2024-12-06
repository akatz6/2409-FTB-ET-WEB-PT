import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </div>
  );
}
