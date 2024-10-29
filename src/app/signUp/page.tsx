"use client"
import { initializeApp } from "firebase/app";
import { getFirestore,collection, addDoc } from "firebase/firestore";


import Link from "next/link"
import { useState } from "react"
import {  addUser } from "../firebase/firebaseAuth";
import { userAddDB } from "../firebase/firebaseFirestore";


// Get a non-default Storage bucket


export default function SignUp(){

      const [email,setEmail] = useState('')
      const [password,setPassword] = useState('')

const [userName,setUserName] = useState('')




      const submit = ()=>{
        console.log(email,password);
        const userInfo = {
          email,
          password,
          userName,
        }
        addUser(email,password,userName);

    
       
        
console.log('adminInfo info==>',userInfo);

        setEmail('')
        setPassword('')
        setUserName('')
      

    }

  return(
    <>
     
     
     <div className="max-w-sm mx-auto"  style={{position: 'relative',top: '70px'}}>
     <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
    <input type="name" id="userName" value={userName} onChange={(e)=>{setUserName(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your name" required />
  </div>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your email" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter your password" required />
  </div>


  <button
    onClick={submit}
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
 >
    SignUp
  </button>
  <Link href={"login"}>already creat account login here</Link>

</div>

         












    
    </>
  )
}


// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Input,
//   Checkbox,
//   Button,
// } from "@material-tailwind/react";
 
// export function LoginCard() {
//   return (
//     <Card className="w-96">
//       <CardHeader
//         variant="gradient"
//         color="gray"
//         className="mb-4 grid h-28 place-items-center"
//       >
//         <Typography variant="h3" color="white">
//           Sign In
//         </Typography>
//       </CardHeader>
//       <CardBody className="flex flex-col gap-4">
//         <Input label="Email" size="lg" />
//         <Input label="Password" size="lg" />
//         <div className="-ml-2.5">
//           <Checkbox label="Remember Me" />
//         </div>
//       </CardBody>
//       <CardFooter className="pt-0">
//         <Button variant="gradient" fullWidth>
//           Sign In
//         </Button>
//         <Typography variant="small" className="mt-6 flex justify-center">
//           Don&apos;t have an account?
//           <Typography
//             as="a"
//             href="#signup"
//             variant="small"
//             color="blue-gray"
//             className="ml-1 font-bold"
//           >
//             Sign up
//           </Typography>
//         </Typography>
//       </CardFooter>
//     </Card>
//   );
// }