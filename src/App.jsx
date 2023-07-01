import Home from "./pages/home/Home";
import Expense from "./pages/expense/Expense";
import Income from "./pages/income/Income";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

import * as ReactDOM from "react-dom/client";
import { useGlobalContext } from "./context/globalContext";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import ExpensePie from "./pages/chart/ExpensePie";
import IncomePie from "./pages/chart/IncomePie";
import Line from "./pages/chart/Line";
import Bar from "./pages/chart/Bar";

import { useState, useEffect } from "react";

function App() {
  const global = useGlobalContext();
  const [user, setUser] = useState({});
  // useEffect(() => {
  //   window.localStorage.setItem("MY_LOG_STATE", user);
  //   const data1 = window.localStorage.getItem("MY_APP_STATE");
  //   if (data1 !== null) setUser(user);
  // }, []);
  // useEffect(() => {
  //   window.localStorage.setItem("MY_LOG_STATE", user);
  // }, [user]);
  useEffect(() => {
		var token = localStorage.getItem('token')
		if (token) {
			const user = JSON.parse(token);
			if (!user) {
				localStorage.removeItem('token')
				//history.replace('/login')
			} else {
				setUser(user)
			}
		}
	}, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                user && user._id ? (
                  <Home setUser={setUser} user={user} />
                ) : (
                  <Login setUser={setUser} />
                )
              }
            />

            <Route
              path="expense"
              element={
                user && user._id ? (
                  <Expense setUser={setUser} user={user} />
                ) : (
                  <Login setUser={setUser} />
                )
              }
            />
            <Route
              path="income"
              element={
                user && user._id ? (
                  <Income setUser={setUser} user={user} />
                ) : (
                  <Login setUser={setUser} />
                )
              }
            />
            <Route path="login" element={<Login setUser={setUser} />} />
            <Route
              path="line"
              element={
                user && user._id ? (
                  <Line setUser={setUser} user={user} />
                ) : (
                  <Login setUser={setUser} />
                )
              }
            />
            <Route
              path="epie"
              element={
                user && user._id ? (
                  <ExpensePie setUser={setUser} user={user} />
                ) : (
                  <Login setUser={setUser} />
                )
              }
            />
            <Route
              path="ipie"
              element={
                user && user._id ? (
                  <IncomePie setUser={setUser} user={user} />
                ) : (
                  <Login setUser={setUser} />
                )
              }
            />
            <Route
              path="bar"
              element={
                user && user._id ? (
                  <Bar setUser={setUser} user={user} />
                ) : (
                  <Login setUser={setUser} />
                )
              }
            />
            <Route path="register" element={<Signup setUser={setUser} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
