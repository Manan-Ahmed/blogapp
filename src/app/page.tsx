"use client"
import Image from "next/image";

import Login from "./admin/adminlogin/page";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseAuth";
import { useRouter } from "next/navigation";
import Bloglist from "./(user)/bloglist/page";
import Navbar from "./component/nav";

// import Login from "./login/page";

export default function Home() {
const route = useRouter()
  // useEffect(()=>{
  //   onAuthStateChanged(auth,(user)=>{
  //     if(user){
  //       route.push('/admin/dashboard')
  //     }
      
  //   })
  // })
  return (
     <Bloglist/>
  )
}
