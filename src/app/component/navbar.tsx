"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <>



      <div className="flex items-center justify-between text-blue-gray-900" style={{backgroundColor: '#30336b',padding: '20px'}}>
          <a className="antialiased font-sans text-inherit mr-4 cursor-pointer py-1.5 text-xl font-bold flex gap-2 items-center" style={{ color: "white" }}>
      <img  className=" w-10 h-10 " src="https://cdn-icons-png.flaticon.com/128/3685/3685253.png" alt="" />
            <span style={{color:  'white'}}>infoTech</span></a>
        <div className="flex items-center gap-4">
      <div className=" hidden lg:block">
   <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    <li className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 p-1 font-normal" style={{color: "white"}}>
      <Link className="flex items-center" href="/">Home</Link></li>
      <li className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 p-1 font-normal" style={{color: "white"}}>
        <Link className="flex items-center" href="/allblogs">Blogs</Link></li>
      <li className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 p-1 font-normal" style={{ color: "white" }}>
        <Link className="flex items-center" href="/signUp">Signup</Link></li>
        <li className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 p-1 font-normal" style={{ color: "white" }}>
            <Link className="flex items-center" href="/login">Login</Link></li></ul></div><div className="ml-auto cursor-pointer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{color: "'white'"}}><path d="M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 0 0 0-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"></path></svg></div><a href="/profile"></a><div className="hidden lg:block"><button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button" style={{background: "rgb(206, 214, 224)", color: "black"}}>Search</button></div><button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] text-xs bg-blue-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none lg:inline-block rounded-full" type="button" style={{background: "rgb(206, 214, 224)", color: "'white'"}}><span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path></svg></span></button><button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none max-w-[40px] max-h-[40px] text-xs bg-blue-500 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none ml-auto h-10 w-10 text-inherit rounded-lg lg:hidden" type="button" style={{background: "rgb(206, 214, 224)", color: "black"}}><span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg></span></button></div></div>
    </>
  )
}
