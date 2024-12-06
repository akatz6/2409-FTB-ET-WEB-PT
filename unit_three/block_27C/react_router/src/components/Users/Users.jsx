import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useGetUsersQuery, useDeleteUserMutation } from "./UsersSlice";

export default function Users() {
  const { data: usersTwo, isSuccess, isLoading } = useGetUsersQuery();
  const [deleteAUser] = useDeleteUserMutation();
  // console.log(usersTwo);
  // console.log(isSuccess);
  // console.log(isLoading);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log(`Is this a success ${isSuccess}`);
    if (isSuccess) {
      setUsers(usersTwo);
    }
  }, [usersTwo]);
  const navigate = useNavigate();
  // const getUsers = async () => {
  //   try {
  //     const { data } = await axios.get("http://localhost:3000/api/users", {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     });
  //     console.log(data);
  //     setUsers(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

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
      const response = await deleteAUser(id).unwrap();
      // fetch(`http://localhost:3000/api/user/${id}`, {
      //   method: "Delete",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${localStorage.getItem("token")}`,
      //   },
      // });
      // const data = await response.json();
      console.log(response);

      // getUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const editUser = (id) => {
    navigate(`/user/${id}`);
  };

  // useEffect(() => {
  //   getUsers();
  // }, []);
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
