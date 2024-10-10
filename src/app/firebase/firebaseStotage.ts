import { app } from "./firebaseConfig";
const storage = getStorage(app);
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


 function UploadFile(fileName:any,file:any){

    const storage = getStorage();
    const storageRef = ref(storage, `images/post${fileName}`);
    
    const uploadTask = uploadBytesResumable(storageRef, file);
    
   
    uploadTask.on('state_changed', 
      (snapshot) => {
    
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
     
      }, 
      () => {
   
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);

        });
      }
    );
}