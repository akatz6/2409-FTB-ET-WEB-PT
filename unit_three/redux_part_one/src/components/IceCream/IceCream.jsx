import { useSelector, useDispatch } from "react-redux";
import {
  incrementIceCream,
  decrementIceCream,
  changeIceCreamFlavor,
} from "./IceCreamSlice";

export default function IceCream() {

  const dispatch = useDispatch();
  return (
    <div>
     
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => dispatch(incrementIceCream())}
      >
        increment
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => dispatch(decrementIceCream())}
      >
        decrement
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => dispatch(changeIceCreamFlavor("Caramel Pecan"))}
      >
        Change Flavor
      </button>
    </div>
  );
}
