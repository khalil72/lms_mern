/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axiosInstance from "@/api/axios-instance";
import { initialSignInFormData, initialSignUpFormData } from "@/config";

import React, { createContext, useEffect, useState } from "react";

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
  const handleLoginUser = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signInFormData)
      });
      
      if (response.ok) {
        const data = await response.json();
        
        // Store the accessToken in sessionStorage
        sessionStorage.setItem('access_token', data.data.accessToken);
  
        // Set the authenticated state
        setAuth({
          authenticate: true,
          user: data.data.user
        });
  
        console.log("Login successful:", data);
      } else {
        setAuth({
          authenticate: false,
          user: null
        });
        console.log("Failed to login");
      }
    } catch (error) {
      console.log("Error logging in:", error);
    }
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
        });
        setLoading(false);
        console.log("User registered successfully:", data);
        
      } else {
        console.log("Failed to register user");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  //checkAuth
  const checkAuthUser = async () => {
    try {
      const token = sessionStorage.getItem('access_token'); // Retrieve the token from sessionStorage
      
      if (!token) {
        throw new Error("No token found");
      }
  
      const response = await fetch('/api/auth/checkAuth', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // Add token in Authorization header
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
      
      if (response.ok && data.success) {
        setAuth({
          authenticate: true,
          user: data.data.user,
        });
      } else {
        setAuth({
          authenticate: false,
          user: null,
        });
      }
      setLoading(false);
    } catch (error) {
      console.error('Error checking authentication:', error);
      setAuth({
        authenticate: false,
        user: null,
      });
      setLoading(false);
    }
  };
  

 
useEffect(()=>{
  checkAuthUser();
},[])
  
  console.log(auth, "gf");

  return (
    <AuthContext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
        handleLoginUser,
        handleRegisterUser,
       
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
