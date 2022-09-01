import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";
// import Navbar from "./components/Navbar/Navbar";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <>
      {/* <Navbar /> */}
      <MainHeader />
      <main>
        {!ctx?.isLoggedIn && <Login />}
        {ctx?.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
