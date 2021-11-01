import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Firebase/FirebaseInit";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [login, setLogin] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const auth = getAuth();

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleLogin = (e) => {
        setLogin(e.target.checked);
    }

    const signInUsingGoogle = () => {
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        /* .then((result) => {
            setUser(result.user);
            setError("");
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(() => setLoading(false)); */
    }

    /* Observer */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setName(user.displayName);
            } else {
                setUser({});
                setName("");
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])

    const logout = () => {
        setLoading(true);
        signOut(auth)
            .then(() => { })
            .catch((error) => { })
            .finally(() => setLoading(false));
    }

    return {
        user,
        loading,
        login,
        error,
        signInUsingGoogle,
        handleName,
        handleEmail,
        handlePassword,
        handleLogin,
        logout
    }
}

export default useFirebase;