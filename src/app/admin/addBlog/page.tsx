"use client"

import { useState } from "react"
import style  from './add.module.css'

import { addDoc, collection, getFirestore } from "firebase/firestore"
import { app } from "@/app/firebase/firebaseConfig"
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"
import { useRouter } from "next/navigation"
const db = getFirestore(app);

export default function AddProduct(){
    const [content,setContent] = useState('')
    const [title,setTitle] = useState('')
    const [mark,setMark] = useState('')
    const [file,setFile] = useState<any>()
    const route = useRouter()


 function UploadFile(){
if(!file){
   console.log('errer')
}
  const storage = getStorage();
  const storageRef = ref(storage, `images/post${file?.name}`);
  
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
        saveDataToFirestore(downloadURL)

      });
    }
  );
}
  

const back = ()=>{
  route.push('/admin/dashboard')
}
          const saveDataToFirestore = async (imageURL: string) => {
            let obj = {
              content:content,
              imageURL:imageURL,
              title:title,
              date:new Date().toISOString(),
              mark:mark
             }
      
            const blogRef = collection(db, "BlogPost");
            await addDoc(blogRef,obj);
         }
    return(
        <>
        <div className={style.addbox} >
          <div className="mb-6">
          
        <input
     
        
  type="file"
  onChange={(e)=>{let files = e.target.files

        if(files) setFile(files[0])
  }}
  className="file-input w-full max-w-xs" />
  </div>
  <div  className="mb-6" >
    <label
      htmlFor="default-input"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
     Title
    </label>
    <input
      type="text"
      value={title}
      onChange={(e)=>{setTitle(e.target.value)}}
      id="default-input"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  </div>
  
  <div className="mb-6"  >
    <label
      htmlFor="default-input"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
     Content
    </label>
    <input
      type="text"
      value={content}
      onChange={(e)=>{setContent(e.target.value)}}
      id="default-input"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  </div>
  

<div className="mb-6" >  
<div className="container">
  <textarea className="textarea-bordered h-24 w-full input rounded-lg mb-4 text-black
  " value={mark}
   onChange={(e)=>{setMark(e.target.value)}}></textarea>
      

     </div>
</div>


<button className="btn btn-primary float-right	"
 onClick={UploadFile}>Publish Blog</button>

<button className="btn btn-primary " onClick={back}>Back</button>

</div>
  
        </>
    )
}

