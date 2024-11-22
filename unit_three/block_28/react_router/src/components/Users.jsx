import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const getUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/users", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  const editUser = (id) => {
    navigate(`/user/${id}`);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.email}</p>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => editUser(user.id)}
            >
              Edit User
            </button>
          </div>
        );
      })}
    </div>
  );
}
