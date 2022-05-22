
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyDZbpl6I3u1oUyslT2ys9Yuz_v1MnYtlmA",
//   authDomain: "fir-blogapp-fa64e.firebaseapp.com",
//   projectId: "fir-blogapp-fa64e",
//   storageBucket: "fir-blogapp-fa64e.appspot.com",
//   messagingSenderId: "67991411370",
//   appId: "1:67991411370:web:3ec2147122033ba56e8ed3"
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyCWuUCHCTgpQeDk17NpPSdjAmEUWePoUG8",
//   authDomain: "aaaa-d3864.firebaseapp.com",
//   databaseURL: "https://aaaa-d3864-default-rtdb.firebaseio.com",
//   projectId: "aaaa-d3864",
//   storageBucket: "aaaa-d3864.appspot.com",
//   messagingSenderId: "456567897590",
//   appId: "1:456567897590:web:127feac1281b3d56485bd7"
// };


const firebaseConfig = {
  apiKey: "AIzaSyCIchq2Uewtg3kqCX1GY1q5hyk8KLRKArU",
  authDomain: "mikers-4b9ce.firebaseapp.com",
  databaseURL: "https://mikers-4b9ce-default-rtdb.firebaseio.com",
  projectId: "mikers-4b9ce",
  storageBucket: "mikers-4b9ce.appspot.com",
  messagingSenderId: "595509713168",
  appId: "1:595509713168:web:2ddf53d518c1bd38a66d95"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getDatabase(app)





