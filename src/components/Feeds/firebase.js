import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBgBCAvUZGwPC-5DuNUT32-HaSdV5oACPE",
  authDomain: "twitter-clone-b49c1.firebaseapp.com",
  projectId: "twitter-clone-b49c1",
  storageBucket: "twitter-clone-b49c1.appspot.com",
  messagingSenderId: "833471401879",
  appId: "1:833471401879:web:df9d211d0d08e769073ed2",
  measurementId: "G-1X8EZT7306"
};

  const firebaseApp = initializeApp(firebaseConfig);
console.log("firebaseApp",firebaseApp)
  const db = initializeFirestore(firebaseApp,{
    experimentalForceLongPolling: true,
  });

  export default db;