import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ClassBasedComp from "./Components/Demo/ClassBasedComp";
import ErrorBoundary from "./Components/Demo/ErrorBoundary";
import Login from "./Components/Demo/Login";
import Expenses from './Components/Expenses/Expenses';

function App() {

  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <ErrorBoundary>
        <Login />
        {/* <Expenses /> */}
        {/* {toggle && <ClassBasedComp show={toggle} />}

        <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>Toggle</button> */}
      </ErrorBoundary>
    </div>
  );
}

export default App;
