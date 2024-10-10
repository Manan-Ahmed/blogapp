import { getFirestore } from "firebase/firestore";
import { app } from "./firebaseConfig";
const db = getFirestore(app);
import { collection, addDoc } from "firebase/firestore"; 


export async function userAddDB(addBlog:any){

    try{
const docRef = await addDoc(collection(db, "blogUsers"), {
     blog: addBlog
});
console.log("Document written with ID: ", docRef.id);
    }
    catch(e){
        console.log(e);
        
    }
}