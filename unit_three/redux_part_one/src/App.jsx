import "./App.css";
import IceCream from "./components/IceCream/IceCream";
import Pie from "./components/Pie/Pie";
import { useSelector, useDispatch } from "react-redux";
import { resetIceCream } from "./components/IceCream/IceCreamSlice";
import { resetPie } from "./components/Pie/PieSlice";
function App() {
  const amount = useSelector((state) => state.iceCream.amount);
  // console.log(amount);
  const flavor = useSelector((state) => state.iceCream.flavor);
  // console.log(flavor);
  const pie = useSelector((state) => state.pie);
  console.log(pie);
  const dispatch = useDispatch();
  return (
    <>
      <h1>
        We have {amount} pints of flavor {flavor}
      </h1>
      <IceCream />
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => dispatch(resetIceCream())}
      >
        Reset
      </button>
      <h1>
        We have {pie.amount} pies of flavor {pie.flavor}
      </h1>
      <Pie />
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => dispatch(resetPie())}
      >
        Reset
      </button>
    </>
  );
}

export default App;
