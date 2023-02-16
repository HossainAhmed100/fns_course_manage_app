import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../../firebase.init";
import { useSignOut } from "react-firebase-hooks/auth";
export const AuthContext = createContext();

const auth = getAuth(app);

function AuthProvider({ children }) {
  const [signOut] = useSignOut(auth);
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);

  // Create A New User
  const createUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  //Login User
  const userLogin = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  // User LogOut
  const userSignOut = async () => {
    return await signOut();
  };

  // Update User Account Info
  const updateUserinfo = async (name) => {
    await updateProfile(auth.currentUser, { displayName: name });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoding(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loding,
    userLogin,
    createUser,
    userSignOut,
    updateUserinfo,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
