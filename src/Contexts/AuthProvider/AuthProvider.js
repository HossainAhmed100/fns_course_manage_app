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
import Swal from "sweetalert2";
export const AuthContext = createContext();

const auth = getAuth(app);

function AuthProvider({ children }) {
  const [signOut] = useSignOut(auth);
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);

  // Create A New User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Login User
  const userLogin = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  // User LogOut
  const userSignOut = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be Log Out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const success = signOut();
        if (success) {
          Swal.fire("Log Out!", "Log Out Successfully", "success");
        }
      }
    });
  };

  // Update User Account Info
  const updateUserinfo = async (name) => {
    await updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //User Obserbe
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
