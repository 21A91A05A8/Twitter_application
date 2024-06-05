import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNAAH3oPVn_nLF4DDduZvDWrDlSl7g_zw",
  authDomain: "twitter-app-b16b4.firebaseapp.com",
  projectId: "twitter-app-b16b4",
  storageBucket: "twitter-app-b16b4.appspot.com",
  messagingSenderId: "451002074790",
  appId: "1:451002074790:web:dd0643bd80396017bad667",
  measurementId: "G-REZXK6ZWPJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;