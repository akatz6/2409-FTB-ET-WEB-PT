import { useDispatch } from "react-redux";
import { incrementPie, decrementPie, changePieFlavor } from "./PieSlice";

export default function Pie() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => dispatch(incrementPie())}
      >
        increment
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => dispatch(decrementPie())}
      >
        decrement
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => dispatch(changePieFlavor("Apple"))}
      >
        Change Flavor
      </button>
    </div>
  );
}
