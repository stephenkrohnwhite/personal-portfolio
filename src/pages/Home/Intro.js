import React from 'react'

function Intro() {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
      <h1 className='text-white'>Hi, I am</h1>
      <h1 className='text-9xl sm:text-3xl text-secondary font-semibold'>Stephen White</h1>
      <h1 className='text-7xl "2xl": { max: "1535px" }, text-white font-semibold'>Software Development Engineer in Test</h1>
      <p className="text-white w w-2/3">
        Hi, I am a fullstack Web Developer with experience in test automaiton, devOps and years of experience in the industry.
      </p>
      <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>Get Started</button>
    </div>
  )
}

export default Intro;