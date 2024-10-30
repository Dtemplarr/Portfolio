import React from 'react'

export default function Herosection() {
  return (
    <div className='flex justify-center gap-10 mt-20'>
      <div>
          <h1 className='text-[30px] font-bold'>Hi, I am Nine, <br/> 
          Creative Technologist
          </h1>
          <p className='mt-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />Cum fugit quod labore nemo. Cum harum culpa quas commodi <br/>consequuntur sit dolor natus, similique, fugiat iusto ex totam nam, atque vel.</p>

          <button className='bg-black text-white text-sm p-2 mt-5 hover:bg-red-600'>Download Resume</button>
      </div>
      <div>
        <img src="/public/images/bless.jpg.jpg" alt="photo" className='w-60 h-60 rounded-full'/>
      </div>
    </div>
  )
}
