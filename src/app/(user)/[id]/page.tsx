"use client"

import Foater from "@/app/component/foater";
import { auth } from "@/app/firebase/firebaseAuth";
import { app } from "@/app/firebase/firebaseConfig";
import { error } from "console";
import { onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, doc, DocumentData, getFirestore, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
// import { doc, onSnapshot } from "firebase/firestore";

export default function Detail({params:{id}}:any){
    const [blogDetail,setBlogDetail] = useState<any>([])
    const [comment,setComment] = useState<any>([])
    const [laoding,setLoading] = useState(true)


      // let collectionRef = collection(db,'commentData')
    
        //   onSnapshot(collectionRef,(querySnapShot)=>{
        //      let comment = querySnapShot.docs.map((item)=>{
        //               console.log(item)
                      
        //   })   
        //     console.log(querySnapShot);

                
        //   })
   
    useEffect(()=>{
      let blogList = []

      const fetchBlog = ()=>{
      const db = getFirestore(app);

let docRef = doc(db,"BlogPost",id)
        const unsub = onSnapshot(docRef, (querySnapShot) => {
            let blog:any=  querySnapShot.data()
            blogList.push(blog)
            setBlogDetail(blogList)
           console.log(blog);
                          

        })
      }

      fetchBlog()
      setLoading(false)
    
},[])  

    
    return(
        <>


{
    laoding ?  <span className="loading loading-spinner loading-lg  mt-8" style={{textAlign: 'center'}}></span> 
:


<>
{
  
  
  
  blogDetail && blogDetail.map((item:any)=>(
  <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col"> 
        <img
  className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
  alt="hero"
  src={item.imageURL}
/>
<div className="text-center lg:w-2/3 w-full">
  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
   {item.title}
  </h1>
  <p className="mb-8 leading-relaxed">
   <ReactMarkdown>{item.mark}</ReactMarkdown>

  </p>

</div>
</div>


</section>
  ))
    

}



   </>
}
        </>
    )
}









{/* <div>
<div className="text-center border-solid" style={{border: '1px solid'}}>
<textarea
value={comment}
onChange={(e)=>{setComment(e.target.value)}}
placeholder="enter your comments"
className="textarea textarea-bordered textarea-lg w-full	 max-w-xs" style={{width: '1200px'}}></textarea>

<button className="btn btn-primary" >Primary</button>

</div>



</div> */}
{/* <div  style={{border: '1px solid black',height: '70px'} } className="m-11 ">
  {commentData}
</div> */}











  