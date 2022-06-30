import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ClassBasedComp from "./Components/Demo/ClassBasedComp";
import ErrorBoundary from "./Components/Demo/ErrorBoundary";
import HelloGraphql from "./Components/Demo/HelloGraphql";
import Login from "./Components/Demo/Login";
import Expenses from './Components/Expenses/Expenses';

function App() {

  return (
    <div className="container">
      <Login />
        {/* <HelloGraphql />       */}
    </div>
  );
}

export default App;
