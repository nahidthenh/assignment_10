import { useEffect, useState } from "react";
import initAuth from "../Firebase/firebase.init";

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    GithubAuthProvider,
    signOut
} from "firebase/auth";

initAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const singInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // console.log(result.user);
                setUser(result.user);
            })
            .catch((error) => {
                setError(error.massage);
            });
    };

    const singInUsingGithub = () => {
        signInWithPopup(auth, githubProvider).then((result) => {
            setUser(result.user);
        });
    };

    const logout = () => {
        signOut(auth).then(() => {
            setUser({});
        });
    };
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // console.log("inside state change", user);
                setUser(user);
            }
        });
    }, []);
    return {
        user,
        error,
        singInUsingGoogle,
        singInUsingGithub,
        logout,
    };
};
export default useFirebase;
