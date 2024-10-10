"use client"
import Link from "next/link"

import { RxHamburgerMenu } from "react-icons/rx"
import { useState } from "react"

import './nav.css'; // Import the CSS file

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

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