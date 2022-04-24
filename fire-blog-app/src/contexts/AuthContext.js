import { auth } from "../helpers/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState, useEffect, createContext } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async (email, password,navigate) => {
    return signInWithEmailAndPassword(auth, email, password)
    .then(()=>{
      navigate("/")
      
    })
    .catch((error)=>{
      console.log(error);
    })

  };

  const logOut = () => {
    signOut(auth);
  };

  const userObserver = (setCurrentUser) => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setCurrentUser(currentUser);
      } else {
        setCurrentUser(false);
      }
    });
  };

  const loginWithGoogle = async (navigate) => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" }); /* ? */
    signInWithPopup(auth, provider)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        register,
        login,
        logOut,
        loginWithGoogle,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
