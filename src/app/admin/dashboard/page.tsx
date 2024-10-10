"use client"
import { app } from "@/app/firebase/firebaseConfig";
import { getAuth, signOut } from "firebase/auth";
import { collection, DocumentData, getFirestore, onSnapshot } from "firebase/firestore";
import {useRouter} from "next/navigation"
import { useEffect, useState } from "react";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
export default function DashBoard(){
  const [blog,setBlog] = useState<DocumentData[]>([])
const [loading,setLoading] = useState(true)
    const route = useRouter()

    useEffect(()=>{
        const db = getFirestore(app);
      let collectionRef = collection(db,'BlogPost')

      onSnapshot(collectionRef,(querySnapShot)=>{
          let allBlogs =   querySnapShot.docs.map((blog)=>(
           {...blog.data(),
            id:blog.id}
              
          ))
          console.log(allBlogs);
          
          setBlog(allBlogs)
          setLoading(false)
      })
        
    },[])
    const logOut = ()=>{

        const auth = getAuth(app);
        signOut(auth).then(() => {
route.push('/')
}).catch((error) => {
console.log(error);

});
    }

const addBlog = ()=>{
  route.push('/admin/addBlog')
}

    return(
        <>
         
<div style={{border: '1px solid black',backgroundColor: '#30336b'}} className="py-8">
  <div  style={{border: '1px solid black'}} className="border-black p-7 text-center mt-5 ">
    <h1 className="text-2xl p-4 text-white">DashBoard</h1>
    <button onClick={logOut} className="btn btn-outline btn-accent mx-3">logout</button>
    <button onClick={addBlog} className="btn btn-outline btn-accent">Publish Blog</button>
    </div>
</div>
       
{
  loading ?
  <span className="loading loading-spinner loading-lg  mt-15" style={{display: 'block',margin: 'auto'}}></span> 
        :

        <div className="relative overflow-x-auto">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead style={{backgroundColor: '#f2f2f2'}} className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          blog
        </th>
        <th scope="col" className="px-6 py-3">
          Title
        </th>
        <th scope="col" className="px-6 py-3">
          Date
        </th>
        <th scope="col" className="px-6 py-3">
          action
        </th>
      </tr>
    </thead>
    <tbody>
     {
      
    blog &&  blog.map(({content,date,title},i)=>(
        <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {content}
        </th>
        <td className="px-6 py-4">
            {title}
        </td>
        <td className="px-6 py-4">
          {new Date(date).toLocaleDateString()}
        </td>
        <td className="px-6 py-4">
        <MdDelete/>
      

      
        </td>
        
    </tr>

      )) 
     }
          
    </tbody>
  </table>
</div>
}
        </>
    )
}