import { getAuth } from "firebase/auth";
export const auth = getAuth(app);

import {  createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebaseConfig";
import {signInWithEmailAndPassword } from "firebase/auth";
import { userAddDB } from "./firebaseFirestore";


export function addUser(email:string, password:string,userName:string){
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    userAddDB({email,password,userName})
    console.log(user.uid,'signup');
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}


export default function loginAdmin(email:string, password:string){

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}