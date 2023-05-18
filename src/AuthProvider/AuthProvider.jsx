import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
const AuthProvider = ({ children }) => {
  //google login 
  const googProvider=new GoogleAuthProvider()
  const auth = getAuth(app);
  // state here
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // observer 
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
    })
    return ()=>{
        unsubscribe()
    }
  },[])
  //create user with email and password
  const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
  // user sign in
  const userSignIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  //logout user
  const logOut=()=>{
    return signOut(auth)
  }
  //update user name profile
  const userUpdate=(name,photoUrl)=>{
    return updateProfile(auth.currentUser,{
        displayName:name,
        photoURL:photoUrl
      })
  }
  //google login
  const googleLogin=()=>{
    return signInWithPopup(auth,googProvider)
  }
  const authInfo = {
    user,
    createUser,
    userUpdate,
    userSignIn,
    googleLogin,
    logOut,
    loading
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
