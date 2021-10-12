import firebaseAuthentication from "../firebase/firebase.init";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

firebaseAuthentication()

const useFirebase = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, setUser] = useState({})
  const [error, setError] = useState({})

  const LoginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const SingnOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      }).catch((error) => {
        setError(error.message)
      });
  }

  return {
    user,
    error,
    SingnOut,
    LoginWithGoogle
  };
};

export default useFirebase;