/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { initialSignInFormData, initialSignUpFormData } from "@/config";
import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);

  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);

  // Handle login submission
  const handleLoginUser = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., API call)
    console.log("Logging in with data: ", signInFormData);
  };

  // Handle registration submission
  const handleRegisterUser = (e) => {
    e.preventDefault();
    // Add your registration logic here (e.g., API call)
    console.log("Registering with data: ", signUpFormData);
  };

  // You can add other authentication-related logic or state here

  return (
    <AuthContext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
        handleLoginUser,
        handleRegisterUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
