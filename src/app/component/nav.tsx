"use client"
import Link from "next/link"

import { RxHamburgerMenu } from "react-icons/rx"
import { useState } from "react"

import './nav.css'; // Import the CSS file
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { app } from "../firebase/firebaseConfig";
import { useAuthContext } from "../context/authcontext";





const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
const route = useRouter()
const {user} = useAuthContext()!

    const logOut = ()=>{

        const auth = getAuth(app);
        signOut(auth).then(() => {
    route.push('/')
    }).catch((error) => {
    console.log(error);
    
    });
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar" style={{backgroundColor: '#30336b',padding: '20px'}}>
              <a className="antialiased font-sans text-inherit mr-4 cursor-pointer py-1.5 text-xl font-bold flex gap-2 items-center" style={{ color: "white" }}>
      <img  className=" w-10 h-10 " src="https://cdn-icons-png.flaticon.com/128/3685/3685253.png" alt="" />
            <span style={{color:  'white'}}>Techinfo</span></a>
            {/* <div className="logo">MySite</div> */}
            <div className="menu-toggle" onClick={toggleMenu}>
                ☰
                {/* <RxHamburgerMenu/> */}
            </div>
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><Link href="/">Home</Link></li>

                <li><Link href="/signUp">Signup</Link></li>
                <li><Link href="/login">login</Link></li>
                <li><Link href="/contact">Contact</Link></li>
{
    user?.email === 'admin@gmail.com' ? <li><Link href="/admin/dashboard">
        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
  <svg
    className="absolute w-12 h-12 text-gray-400 -left-1"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
      clipRule="evenodd"
    />
  </svg>
</div>

        </Link></li> : ''

}
<li><button onClick={logOut} className="btn btn-outline btn-accent mx-3">logout</button></li>

                {/* <li> <button onClick={logOut}>logOut</button></li> */}
                
            </ul>
        </nav>
    );
};

export default Navbar;




// function compareTriplets(a, b) {
//   let aliceScore = 0;
//   let bobScore = 0;
//    for(let i = 0;i < a.length;i++){
//            if(a[i] > b[i]){
//               aliceScore += 1
//            }  else if(a[i] < b[i]){
//                 bobScore += 1 
                
           
//        }
//    }
//    return ([aliceScore,bobScore])
// }
// compareTriplets([7, 6, 5],[3,6,10])