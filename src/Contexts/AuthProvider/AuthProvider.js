import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../../firebase.init";

export const AuthContext = createContext();

const auth = getAuth(app);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);

  // Create A New User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserinfo = async (name, phone, photo, address, age) => {
    await updateProfile(auth.currentUser, {
      displayName: name,
      phoneNumber: phone,
    })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
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
    createUser,
    updateUserinfo,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
