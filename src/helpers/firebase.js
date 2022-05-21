
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCWuUCHCTgpQeDk17NpPSdjAmEUWePoUG8",
  authDomain: "aaaa-d3864.firebaseapp.com",
  databaseURL: "https://aaaa-d3864-default-rtdb.firebaseio.com",
  projectId: "aaaa-d3864",
  storageBucket: "aaaa-d3864.appspot.com",
  messagingSenderId: "456567897590",
  appId: "1:456567897590:web:127feac1281b3d56485bd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getDatabase(app)





