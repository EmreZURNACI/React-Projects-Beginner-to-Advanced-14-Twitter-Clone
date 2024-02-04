import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCSQ22jEgCr_bjrrtFFWqtN-E5e-hksitY",
  authDomain: "twitter-clone-8a104.firebaseapp.com",
  projectId: "twitter-clone-8a104",
  storageBucket: "twitter-clone-8a104.appspot.com",
  messagingSenderId: "790103719270",
  appId: "1:790103719270:web:f93833a63ca28b3b169ca7"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export const Login = async (email, password) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password)
  return user
}