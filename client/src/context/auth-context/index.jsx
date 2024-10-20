/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axiosInstance from "@/api/axios-instance";
import { initialSignInFormData, initialSignUpFormData } from "@/config";
import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  
  const[auth ,setAuth] = useState({
    authenticate: false,
    user:null,
  });

  const [loading ,setLoading] = useState(true);


  // Handle login submission
  const handleLoginUser = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., API call)
    console.log("Logging in with data: ", signInFormData);
  };

  // Handle registration submission
  const handleRegisterUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpFormData), 
      });
      
      if (response.ok) {
        const data = await response.json(); 
        setAuth({
          authenticate:true,
          user:data.data.user
        })
        console.log("User registered successfully:", data);
        
      } else {
        console.log("Failed to register user");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };


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
