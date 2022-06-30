import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwSFpIGSyZ12XLwAfHjnImHk6g-X_1JYA",
  authDomain: "chat-web-app-de636.firebaseapp.com",
  databaseURL: "https://chat-web-app-de636-default-rtdb.firebaseio.com",
  projectId: "chat-web-app-de636",
  storageBucket: "chat-web-app-de636.appspot.com",
  messagingSenderId: "201967405726",
  appId: "1:201967405726:web:95744a177746ff119f898f"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
