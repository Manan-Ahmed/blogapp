"use client"

import { useRouter } from "next/navigation";

import Login from "./login/page";



export default function Home() {
const route = useRouter()
  
  return (
     <Login/>

   
  )
}
