import { initializeApp } from "firebase/app";
// import { getFirestore} from "firebase/database";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQfxIsBTj4xpN9pxId_Ed-BF2efPYhuxA",
  authDomain: "aplikasi-rts.firebaseapp.com",
  databaseURL: "https://aplikasi-rts-default-rtdb.firebaseio.com",
  projectId: "aplikasi-rts",
  storageBucket: "aplikasi-rts.appspot.com",
  messagingSenderId: "1015950616721",
  appId: "1:1015950616721:web:b00cb9888bbc89c15a3730",
  measurementId: "G-PHF6QXWE4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
// const analytics = getAnalytics(app);