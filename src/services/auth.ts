import { initializeApp } from "@firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";

import FIREBASE_CONFIG from "../firebase-config";
import firebaseErrorMessage from "../utils/firebaseErrorMessage";

initializeApp(FIREBASE_CONFIG);

export const user = false;

export const register = (name: string, email: string, password: string) => {
    const fauth = getAuth();

    return new Promise((resolve) => {
        createUserWithEmailAndPassword(fauth, email, password)
            .then(() => {
                updateProfile(fauth.currentUser, {
                    displayName: name,
                })
                    .then(() => {
                        resolve({ status: true, message: "Register successfully.", delay: 3000 });
                    })
                    .catch((error) => {
                        resolve({ status: false, message: error.message, delay: 6000 });
                    });
            })
            .catch((error) => {
                console.log(error)
                const { message, delay } = firebaseErrorMessage(error)
                resolve({ status: false, message, delay });
            });
    });
};

export const getProfile = (hard = false) => {
    return new Promise((resolve) => {
        const fauth = getAuth();

        fauth.onAuthStateChanged((user) => {
            if (user) {
                resolve(user);
            } else {
                resolve(false);
            }
        });

    });
}

export const logout = () => {
    return new Promise((resolve) => {
        const fauth = getAuth();
        fauth.signOut().then(() => {
            resolve({ status: true, message: "Logged out successfully.", delay: 3000 });
        }).catch(() => {
            resolve({ status: true, message: "Logged out successfully.", delay: 3000 });
        });
    })
}

export const login = (email: string, password: string) => {
    const fauth = getAuth();

    return new Promise((resolve) => {
        signInWithEmailAndPassword(fauth, email, password).then((user) => {
            if (user) {
                resolve({ status: true, message: "Login successfully.", delay: 3000 });
            } else {
                resolve({ status: false, message: "Incorrect Email or Password.", delay: 3000 });
            }
        }).catch((err) => {
            console.error(err)
            const { message, delay } = firebaseErrorMessage(err)
            resolve({ status: false, message, delay });
        });
    });

}
