import Image from 'next/image'
import { Glow } from '@/assests'
import { Navbar, Prize, Organizers, Timeline } from '@/components'

export default function Home() {
  return (
    <div className=' bg-[#1E1E1E]'>
    {/*<Image src={Glow} width={400} height={400} /> */} {/* This is how you should use image*/}
    <Navbar/>
    <Prize/>
    <Timeline/>
    <Organizers/>
    </div>
  )
}
