import Link from "next/link"
export default function Header() {
  return (
    <div className=" mx-auto px-5   grid md:grid-cols-5  grid-rows-2  h-16 bg-slate-100 ">
     <h2 className=" text-xl text md:text-3xl md:mt-5 ">CHANDAN</h2>
    <div className="gap-3 flex md:gap-10 md:mt-5">
      <Link href={'/'} className='text-ll ms:text-3xl anim'>HOME</Link>
    
     
      <Link href={'/'} className='text-ll ms:text-3xl anim'>ABOUT</Link>
    
      <Link href={'/'} className='ms:text-3xl text-ll anim'>CONTACT</Link>
    
      <Link href={'/'} className='ms:text-3xl text-ll anim'>PORTFOLIO</Link>
      </div> 
    </div>
  )
}
