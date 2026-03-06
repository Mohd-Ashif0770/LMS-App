import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image src="/hero.gif" alt="hero" width={1000} height={1000}
      className="w-full h-full object-cover absolute inset-0"
       />

       <div className="absolute w-full flex flex-col items-center mt-20 ">
        <h2 className="text-6xl font-bold font-game text-white"
        style={{
          textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
          letterSpacing: '0.05em',
        }}
        >Start Your</h2>
        <h2 className="text-7xl font-medium font-game text-yellow-400"
        style={{
          textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
          letterSpacing: '0.04em',
        }}
        >Coding Adventure</h2>

        <h2 className="text-white text-[1.6rem] font-medium font-game mt-4">
          Beginner-friendly coding courses and projects.
        </h2>
        <Button className="font-game px-6 py-5 text-2xl mt-4 cursor-pointer" variant="pixel">
          GET STARTED
        </Button>
       </div>

    </div>
  )
}
