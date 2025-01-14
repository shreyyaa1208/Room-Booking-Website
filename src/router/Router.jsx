import React, { lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Privacy from "../Components/Privacy/Privacy";
import Home from "../Home/Home";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";
import Signup2 from "../Components/Signup2/Signup2";

function MainRouter() {
  return (
    <Router>
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path={`/privacy`} element={<Privacy />}></Route>
          <Route path={`/`} element={<Home />}></Route>
          <Route path={`/login`} element={<Login />}></Route>
          <Route path={`Home`} element={<Home />}></Route>
          <Route path={`/signup`} element={<Signup />}></Route>
          <Route path={`/signup2`} element={<Signup2 />}></Route>
        </Routes>
      </React.Suspense>
    </Router>
  );
}

export default MainRouter;
