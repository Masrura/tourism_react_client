import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useLocation, useHistory } from 'react-router-dom';
initializeAuthentication();
const useFirebase = () => {

    const history = useHistory();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const registerNewUser = (name, email, password) => {
        const auth = getAuth();
        return createUserWithEmailAndPassword(auth, email, password)
        // .then(result => {
        //     const user = result.user;
        //     console.log(user);
        //     //setUser(result.user);
        //     setError('');
        //     //verifyEmail();
        //     setUserName(name);

        // })
        // .catch(error => {
        //     setError(error.message);
        // })
    }

    const setUserName = (name) => {
        const auth = getAuth();
        return updateProfile(auth.currentUser, { displayName: name })

    }

    const processLogin = (email, password) => {

        const auth = getAuth();
        setIsLoading(false);
        return signInWithEmailAndPassword(auth, email, password)

    }
    const signInWithGoogle = () => {
        const auth = getAuth();
        const googleProvider = new GoogleAuthProvider();
        setIsLoading(false);
        return signInWithPopup(auth, googleProvider)

    }

    const logOut = () => {
        const auth = getAuth();
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('Inside state changed', user);
                setUser(user);
            }
            setIsLoading(false);
        })
    }, [])
    
    useEffect(() => {
        fetch(`http://secret-scrubland-17703.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        console.log(email, 'and', displayName);
        fetch('http://secret-scrubland-17703.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return {
        user,
        error,
        isLoading,
        setUserName,
        registerNewUser,
        processLogin,
        signInWithGoogle,
        logOut,
        saveUser,
        admin

    }
}
export default useFirebase;