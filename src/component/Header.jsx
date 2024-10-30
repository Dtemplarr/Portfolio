import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-white flex justify-around py-6 shadow-md'>
      <div>
        <h1 className='font-bold text-[20px]'>Nine</h1>
      </div>
      <div className='flex'>
        <Link to='/' className='mx-4 font-semibold hover:text-blue-600'>Home</Link>
        <Link to='project' className='mx-4 font-semibold hover:text-blue-600'>Project</Link>
        <Link to='about' className='mx-4 font-semibold hover:text-blue-600'>About</Link>
        <Link to='skills' className='mx-4 font-semibold hover:text-blue-600'>Skills</Link>
        <Link to='contact' className='mx-4 font-semibold hover:text-blue-600'>Contact</Link>
      </div>
    </div>
  )
}