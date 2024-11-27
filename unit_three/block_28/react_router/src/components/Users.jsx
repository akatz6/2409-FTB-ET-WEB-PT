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
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      // const response = await axios.delete(
      //   `http://localhost:3000/api/user/${id}`,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${localStorage.getItem("token")}`,
      //     },
      //   }
      // );
      // console.log(response);
      const response = await fetch(`http://localhost:3000/api/user/${id}`, {
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      console.log(data);

      getUsers();
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
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => deleteUser(user.id)}
            >
              Delete User
            </button>
          </div>
        );
      })}
    </div>
  );
}
