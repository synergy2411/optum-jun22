import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ClassBasedComp from "./Components/Demo/ClassBasedComp";
import Expenses from './Components/Expenses/Expenses';

function App() {

  const [toggle, setToggle] = useState(false);

  return (
    <div>
      
      {/* <Expenses /> */}
      {toggle && <ClassBasedComp show={toggle} />}

      <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
}

export default App;
