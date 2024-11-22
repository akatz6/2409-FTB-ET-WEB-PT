import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  console.log(id);
  return <div>User</div>;
}
