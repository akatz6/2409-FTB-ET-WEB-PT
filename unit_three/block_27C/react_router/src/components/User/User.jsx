import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
import { useGetUserQuery, useUpdateUserMutation } from "./UserSlice";

export default function User() {
  const { id } = useParams();
  const { data, isSuccess } = useGetUserQuery(id);
  const [updateUser] = useUpdateUserMutation();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  // const getUser = async () => {
  //   try {
  //     // const { data } = await axios.get(`http://localhost:3000/api/user/${id}`, {
  //     //   headers: {
  //     //     Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     //   },
  //     // });
  //     // console.log(data);

  //     const response = await fetch(`http://localhost:3000/api/user/${id}`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //     setEmail(data.email);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  useEffect(() => {
    // getUser();
    if (isSuccess) {
      setEmail(data.email);
    }
  }, [data]);

  const submit = async (e) => {
    e.preventDefault();
    try {
      // const { data } = await axios.put(
      //   `http://localhost:3000/api/user/${id}`,
      //   {
      //     email,
      //   },
      //   {
      //     headers: {
      //       Authorization: `Bearer ${localStorage.getItem("token")}`,
      //     },
      //   }
      // );
      // console.log(data);
      // const response = await fetch(`http://localhost:3000/api/user/${id}`, {
      //   method: "Put",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${localStorage.getItem("token")}`,
      //   },
      //   body: JSON.stringify({
      //     email,
      //   }),
      // });
      // const data = await response.json();
      // console.log(data);
      const response = await updateUser({ id, email }).unwrap();
      console.log(response);
      navigate("/users");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={submit}>
        <div className="form-group">
          <label>Update Email</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
