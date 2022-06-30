import { Redirect, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ClassBasedComp from "./Components/Demo/ClassBasedComp";
import ErrorBoundary from "./Components/Demo/ErrorBoundary";
import HelloGraphql from "./Components/Demo/HelloGraphql";
import Login from "./Components/Demo/Login";
import Expenses from './Components/Expenses/Expenses';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';

function App() {

  return (
    <div className="container">
      <Header />
      <br />
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/expenses">
        <Expenses />
      </Route>
      <Route path="/hello-graphql">
        <HelloGraphql />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
    </div>
  );
}

export default App;
