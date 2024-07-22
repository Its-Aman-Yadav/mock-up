import { UserButton } from '@clerk/nextjs';
import React from 'react'
import AddNewInterview from './_component/AddNewInterview';

function dashboard() {
  return (
    <div className='p-10 '>
      <h2 className='font-bold text-2xl'>Dashboard</h2>
      <h2 className='text-gray-5 00'>Create and Start your AI Mockup Interview</h2>

     <div className="grid grid-cols-1 md:grid:cols-3 my-5">
       <AddNewInterview/>
     </div>
    </div>
  )
}

export default dashboard;
