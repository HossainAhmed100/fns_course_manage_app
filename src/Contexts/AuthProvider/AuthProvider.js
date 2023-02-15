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
import { useQuery } from "@tanstack/react-query";
import axios from "../../axios";
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

  // Loud User Account info From Server
  const LoadUserInfo = async (user) => {
    const { data: serveruser = [] } = useQuery({
      queryKey: ["laoduser", user],
      queryFn: async () => {
        const data = await axios.get(`laoduser?email=${user?.email}`);
        return data;
      },
    });
    return serveruser;
  };

  // Update User Account Info
  const updateUserinfo = async (name, phone, age, address) => {
    await updateProfile(auth.currentUser, { displayName: name })
      .then(() => {
        axios
          .put(`userUpdate?email=${user?.email}`, { name, phone, age, address })
          .then((res) => console.log(res.data))
          .then((error) => console.log(error));
      })
      .catch((error) => console.log("Then Error", error));
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
