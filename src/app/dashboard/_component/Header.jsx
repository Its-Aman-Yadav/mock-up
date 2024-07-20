"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
function Header() {

  const path = usePathname();
//   useEffect(()=>{
//      console.log(path);
//   },[]);


  return (
    <div className='flex p-4 items-center justify-between'>
      <Image src={'/logo.png'} width={50} height={100} alt="MockUP" />
      <ul className='hidden md:flex gap-6 mt-1'>
        <li className={`hover:text-blue-800 hover:font-bold transition-all
             ${path=='/dashboard' && 'font-bold text-blue-800'}`}>Dashboard</li>
        <li className={`hover:text-blue-800 hover:font-bold transition-all
             ${path=='/dashboard/questions' && 'font-bold text-blue-800'}`}>Questions</li>
        <li className={`hover:text-blue-800 hover:font-bold transition-all
             ${path=='/dashboard/upgrade' && 'font-bold text-blue-800'}`}>Upgrade</li>
        <li className={`hover:text-blue-800 hover:font-bold transition-all
             ${path=='/dashboard/how' && 'font-bold text-blue-800'}`}>How it work?</li>
      </ul>
      <UserButton/>
    </div>
  )
}

export default Header
