import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Redirect, Route } from 'react-router-dom';
import HelloGraphql from "./Components/Demo/HelloGraphql";
import Login from "./Components/Demo/Login";
import Expenses from './Components/Expenses/Expenses';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import { AuthContext } from './context/auth-context';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if(localStorage.getItem("authToken")){
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      setIsLoggedIn
    }}>
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
    </AuthContext.Provider>
  );
}

export default App;
