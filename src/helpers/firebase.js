
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDZbpl6I3u1oUyslT2ys9Yuz_v1MnYtlmA",
  authDomain: "fir-blogapp-fa64e.firebaseapp.com",
  projectId: "fir-blogapp-fa64e",
  storageBucket: "fir-blogapp-fa64e.appspot.com",
  messagingSenderId: "67991411370",
  appId: "1:67991411370:web:3ec2147122033ba56e8ed3"
};


// const firebaseConfig = {
//   apiKey: "AIzaSyCWuUCHCTgpQeDk17NpPSdjAmEUWePoUG8",
//   authDomain: "aaaa-d3864.firebaseapp.com",
//   databaseURL: "https://aaaa-d3864-default-rtdb.firebaseio.com",
//   projectId: "aaaa-d3864",
//   storageBucket: "aaaa-d3864.appspot.com",
//   messagingSenderId: "456567897590",
//   appId: "1:456567897590:web:127feac1281b3d56485bd7"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getDatabase(app)





