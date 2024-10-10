"use client"

import { useEffect, useState } from "react"
import { collection, doc, DocumentData, getFirestore, onSnapshot, Unsubscribe } from "firebase/firestore";
import { app } from "@/app/firebase/firebaseConfig";
import Image from "next/image";
import { url } from "inspector";
import Cart from "@/app/component/card";
import Link from "next/link";
import Navbar from "@/app/component/nav";
import ReactMarkdown from "react-markdown";
import Foater from "@/app/component/foater";
// import { Navbar } from "@material-tailwind/react";


export default function Bloglist(){
const [blog,setBlog] = useState<DocumentData[]>([])
const [loading,setLoading] = useState(true)

    
useEffect(() => {

  fetchData()
  setLoading(false)

 

}, [])

    let readDataRealTime: Unsubscribe;
      const fetchData = ()=>{
        const db = getFirestore(app);
      let collectionRef = collection(db,'BlogPost')

      readDataRealTime =  onSnapshot(collectionRef,(querySnapShot)=>{
        console.log(querySnapShot);
        
          let allBlogs =   querySnapShot.docs.map((blog)=>(
           {...blog.data(),
            id:blog.id}
              
          ))
          console.log(allBlogs);
          setBlog(allBlogs)

      })
    }
    return(
        <>
        {
            loading ? <span className="loading loading-spinner loading-lg  mt-8" style={{textAlign: 'center'}}></span> 
            :


<>
        <Navbar/>
        
 <div style={{border: '1px solid',height: '330px',backgroundColor: '#30336b',padding: '25px'}}>
<div style={{
display: 'flex',justifyContent: 'center',marginTop: '30px',alignItems: 'center',
  padding: '10px',fontSize: '30px'
  }}>
  
  <img src="https://cdn-icons-png.flaticon.com/128/3685/3685253.png" alt="" />
       <span style={{color: '#eb916e'}}> Techinfo </span>
</div>
<div style={{textAlign: 'center',fontSize: '30px',color: 'white'}}><p>Here are some blogs contributed by info Tech.</p></div>
</div>
      

      
      <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
        {
            blog && blog.map(({content,date,mark,imageURL,id},i)=>(
                


         
                  <div className="p-4 md:w-1/3" key={i}>
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={imageURL}
                        alt="blog"
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                          {content}
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                         {new Date(date).toLocaleDateString()}
                        </h1>
                        <p className="leading-relaxed mb-3">
                        {mark.slice(0,140)}

                        </p>
                        <div className="flex items-center flex-wrap ">
                          <Link href={id} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                            Learn More
                            <svg
                              className="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14" />
                              <path d="M12 5l7 7-7 7" />
                            </svg>
                          </Link>
                    
                        </div>
                      </div>
                    </div>
                  </div>
                 
               
            
                
              
               

 
            ))


        
        }


</div>
              </div>
            </section>
     


</>

}
        </>
    )
}



