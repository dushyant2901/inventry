import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBZXTHUU8EHGnoY37-OnF6dzRxg2yvmWBU",
  authDomain: "headstarter-f19b0.firebaseapp.com",
  projectId: "headstarter-f19b0",
  storageBucket: "headstarter-f19b0.appspot.com",
  messagingSenderId: "1041814547978",
  appId: "1:1041814547978:web:4c52d1fd586da82a2379f3",
  measurementId: "G-6MW8L3CZCE",
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };
