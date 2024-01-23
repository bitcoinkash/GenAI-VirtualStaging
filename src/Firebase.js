
//importes method 
import { initializeApp } from "firebase/app";

// contains apis which helps  us to contain connect the firebase account
const firebaseConfig = {
    apiKey: "AIzaSyA8yx-I1sb2rAqr7ye483S0nGqzOvTPuPs",
    authDomain: "decorateai.firebaseapp.com",
    projectId: "decorateai",
    storageBucket: "decorateai.appspot.com",
    messagingSenderId: "833095593142",
    appId: "1:833095593142:web:48ba0da64c0885e65e0a17"
  };

// connects the firebase app to firebase account

  export const app = initializeApp(firebaseConfig);
  