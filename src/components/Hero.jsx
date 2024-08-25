import React from 'react'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 justify-center items-center text-center max-w-[900px] w-full mx-auto p-4'>
        <div className='flex flex-col gap-2'>
            <p> IT'S TIME TO GET</p>
            <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'> Swole<span className = 'text-blue-400'>normous</span></h1>
        </div>
        <p className='text-sm md:text-base font-light'> I acknowlege the risk of me becoming an <span className = 'text-blue-400 font-medium'> extremely jacked beast</span> eu nisi esse officia sint dolor nostrud ad cupidatat nulla magna reprehenderit dolor id Lorem ut labore sunt non dolor velit anim exercitation dolor nulla deserunt ut cillum non non occaecat cupidatat ea ut tempor amet non nulla esse nisi aliquip</p>
        <p><button className='px-8 py-4 rounded-md border-2 border-blue-400 border-solid bg-slate-950 blueShadow duration-200'>Accept and Begin</button></p>
    </div>
  )
}
