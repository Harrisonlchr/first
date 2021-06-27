import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABCIN4BXlxqQHp257NQBuxeF_YzNmzteI",
  authDomain: "first-d42d8.firebaseapp.com",
  projectId: "first-d42d8",
  storageBucket: "first-d42d8.appspot.com",
  messagingSenderId: "748648274994",
  appId: "1:748648274994:web:d0e586715caf07b130f02b",
  measurementId: "G-MX59GGQH82",
};

// si no existe una instancia de Firebase creada la crea.
!firebase.apps.length && firebase.initializeApp(firebaseConfig);

export const loginWithGithub = async () => {
  await firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider());
};

export const authStateChanged = (setUser) => {
   firebase.auth().onAuthStateChanged(user => user && setUser({
    avatar: user.photoURL,
    username: user.displayName,
    email: user.email
  }));
};
