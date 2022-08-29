import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Home } from "./client/pages/Home.js";
import { User } from "./client/pages/User.js";
import { AuthContextProvider } from "./client/contexts/AuthContext";
import Signin from "./client/components/Signin";
import Signup from "./client/components/Signup";
//import Account from "./client/components/Account";
import ProtectedRoute from "./client/components/ProtectedRoute";

function App() {
  return (
    <div className="App-container">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
