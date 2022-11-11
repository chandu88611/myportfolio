import Link from "next/link"
import { AiFillFacebook ,AiOutlineInstagram,AiFillGithub,AiFillLinkedin } from "react-icons/ai";
// import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore ,{Autoplay} from "swiper"
// import Swiper styles
import $ from "jquery"
import 'swiper/css';
import { useEffect } from "react";
export default function main() {
  
  SwiperCore.use([Autoplay])


useEffect(()=>{
    setInterval(()=>{

        $('.greet').slideUp(3000).slideDown(3000);
       
    },2000)
// $('.anim').animate({
//     // opacity: 0.25,/
 
// },6000)
},[])

  return (
   <section className="py-13">
<div className=" mx-auto  md:px-20 ml-10 mt-20 div">
<Swiper
        spaceBetween={50}
        slidesPerView={1}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        autoplay={{delay:2000
        }}
    >
        <SwiperSlide> {post()}</SwiperSlide>
        <SwiperSlide> {post2()}</SwiperSlide>

    <h1>swipe</h1>
    </Swiper>
</div>
   </section>
  )
}

function post(){
    return(
        <div className="  md:justify-center mr-8 flex flex-row container1  ">
 <div className="info  md:gap-y-4  gap-y-3 ms:gap-y-0 flex flex-col bg-slate-400  py-10 px-11">
<p className="text-white md:text-xl text-xs greet">HEY THERE!</p>
<h2 className="md:text-4xl text-xs text-white">I AM <span className="text-bold name text-orange-200 shadow text-l md:text-3xl">CHANDAN</span></h2>
 <h3 className="text-white  md:text-xl  text-xs">CREATIVE FULL STACK WEB DEVELOPER</h3>
 <div className="icons flex gap-3  ">

    {/* <Link href={'/'}><AiFillFacebook  className=" md:font-medium"/>  </Link>
    <Link href={'/'}><AiOutlineInstagram className=" md:font-medium"/>  </Link> */}
    <Link href={'https://github.com/chandu88611'}><AiFillGithub className=" md:font-medium"/>  </Link>
    <Link href={'https://www.linkedin.com/in/chandan-a-s-b28a28216/'}><AiFillLinkedin className=" md:font-medium"/>  </Link>

 </div>
 <button className="bg-blue-600 w-28" ><a href="/images/Resume1.pdf" download > Download CV</a></button>
 </div>
 <div className="images ">
  <img className="image1  max-h-80 min-h-max" src={"/images/my.jpg" } />

 </div>
        </div>
    )
}

function post2(){
  return(
    <div className="  justify-center container1 flex  ">
<div className="info gap-y-1 flex flex-col bg-slate-400  w-2/3  py-10 px-11 ">
<p className="text-white text-xl md:text-3xl">Skills</p>
<h3 className="text-bold text-xs md:text-xl"> Html,css,javascript</h3>
<h3 className="text-bold text-xs md:text-xl">React js,Next js,Tailwind css,Material ui</h3>
<h3 className="text-bold text-xs md:text-xl"> Node js,Express js</h3>
<h3 className="text-bold text-xs md:text-xl">MongoDb</h3>
<h3 className="text-bold text-xs md:text-xl"></h3>

<div className="icons flex  md:gap-3  "> 
<Link href={'https://github.com/chandu88611'}><AiFillGithub className=" md:font-medium"/>  </Link>
    <Link href={'https://www.linkedin.com/in/chandan-a-s-b28a28216/'}><AiFillLinkedin className=" md:font-medium"/>  </Link>



</div>
</div>

    </div>
)
}