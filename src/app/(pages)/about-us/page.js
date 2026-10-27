"use client"

import React, { useEffect, useState } from 'react'
import style from './about.module.css'
import '../../components/UI/innerpage.css'
import Button from '@/app/components/Button'
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const industriesList = [
  "Earth moving industry","Oil & Gas industry","Shipping","Off-road sectors","Plastic Injection & moulding industry","On-road sector","Elevators & Construction industry","Locomotive Industry",
  "Compressor Industry","Agriculture and Farm industry","Hydrogen Fuel Cell","Power Generation & General Engineering"
]

const expCards = [
  {
    icon:"/assets/images/exp1.svg",
    title:"Engineering Built For Complexity",
    content:"Lorem ipsum dolor sit amet consectetur. Mauris eu sed sed",
  },
  {
    icon:"/assets/images/exp1.svg",
    title:"End-To-End Manufacturing Support",
    content:"Lorem ipsum dolor sit amet consectetur. Mauris eu sed sed",
  },
  {
    icon:"/assets/images/exp1.svg",
    title:"Technology That Keeps Evolving",
    content:"Lorem ipsum dolor sit amet consectetur. Mauris eu sed sed",
  },
  {
    icon:"/assets/images/exp1.svg",
    title:"Quality Built Into Every Process",
    content:"Lorem ipsum dolor sit amet consectetur. Mauris eu sed sed",
  },
  
]

const timeLine = [
  {
    title:"Where It All Began",
    year:"1984-1996",
    content:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis."
  },
    {
    title:"Our First Engineering Step",
    year:"1984-1996",
    content:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis."
  },
    {
    title:"Investing In Precision",
    year:"1984-1996",
    content:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis."
  },
    {
    title:"Engineering New Possibilities",
    year:"1984-1996",
    content:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis."
  },
  {
    title:"Where It All Began",
    year:"1984-1996",
    content:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis."
  },
    {
    title:"Our First Engineering Step",
    year:"1984-1996",
    content:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis."
  },
    {
    title:"Investing In Precision",
    year:"1984-1996",
    content:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis."
  },
    {
    title:"Engineering New Possibilities",
    year:"1984-1996",
    content:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis."
  },

]

const certificates = [
  "/assets/images/cert1.png",
  "/assets/images/cert2.png",
  "/assets/images/cert3.png",
  "/assets/images/cert4.png",
  "/assets/images/cert5.png",
  "/assets/images/cert1.png",
  "/assets/images/cert2.png",
  "/assets/images/cert3.png",
  "/assets/images/cert4.png",
  "/assets/images/cert5.png",
]

export default function page() {

    const [mobile,setMobile] = useState(false);

     useEffect(()=>{
    
        const checkDevice = () =>{
          setMobile(window.innerWidth<1200);
        }
    
        checkDevice();
        window.addEventListener("resize",checkDevice);
    
        return(()=>{
        window.removeEventListener("resize",checkDevice);
      
        })
    
       
    
      },[])


  return (
  <>
  
  
  {/* hero section  */}
  
  <section className={`${style.heroSection} heroSection`} style={{backgroundImage:!mobile?`url(/assets/images/about-banner.png)`:''}}>
   {mobile && 
      <Image className={`${style.mobileBanner} mobile_banner`} src="/assets/images/about-banner-mobile.png" width={1148} height={704} alt=''/>
      }
    <div className='container'>
     
<div className={`content top_heading left ${style.top_heading}`}>
    <h1 className='common_heading white'>Five Decades Of Precision. Built Forward.</h1>
    <p className='white'>PMAC brings more than five decades of engineering experience to every challenge, combining proven manufacturing expertise with evolving technologies and capabilities for the industries of tomorrow.</p>
    <Button link='#' classname="common_btn white_btn" text="Enquire Now" />
    
</div>
    </div>
  </section>
  

  {/* legacy section  */}
  <section className={`common_section ${style.legacy_section}`}>
    <div className={`container ${style.container}`}>

<div className={style.left}>
  <div className='top_heading left'>
    <h2 className='common_heading blue'>A Legacy Built To Stand The Test 
Of Time.</h2>
<p>What began in 1974 as a modest workshop in Nandambakkam has grown into Precision Machine & Auto Components (PMAC), a precision manufacturing enterprise shaped by more than five decades of engineering experience. PMAC started with basic machining equipment and early work for industries including automotive and electrical manufacturing. 
</p>
<p>Over the years, the company expanded into complex machining, custom-built machines and specialised engineering solutions, continually investing in technology and capability. From its early partnerships with leading industrial companies to its growing global presence, PMAC’s journey has been defined by learning, adapting and building for what comes next. Today, that legacy continues to shape every component, process and solution we deliver.
</p>
  </div>
</div>

<div className={style.right}>
  <Image className={style.mainImg} src="/assets/images/legacy.svg" width={633} height={534} alt=''/>
  <Image className={style.goldenJubileeImg} src="/assets/images/50-logo.svg" width={227} height={227} alt=''/>

</div>

    </div>
  </section>


  {/* industries  */}
  
  <section className={`common_section blue_bg no_padding_bottom ${style.industries_section}`}>
    <div className={`container section_container ${style.container}`}>
      <div className={`top_heading center`}>
        <h2 className='common_heading white'>Industries We Serve</h2>
        <p className='white'>From agriculture and compressors to off-road, oil & gas, construction and power, PMAC supports diverse industries with precision-engineered components.</p>
      </div>

      <div className={style.industries_list}>
        <Image src="/assets/images/ab-indutries-circle.svg" width={992} height={612} alt=''/>
        {industriesList.map((item,i)=>(
        <span key={i}>{item}</span>
        ))}
       
      </div>


    </div>
  </section>


  {/* mission/vision */}

  <section className={`common_section ${style.misVis_section}`}>
    <div className={`container ${style.container}`}>
      <div className={style.card}>
        <div className={style.wrap}>
        <div className="top_heading left">
          <p className='blue'>Vision</p>
          <h2 className='blue'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi </h2>
        </div>
        </div>
      </div>
       <div className={style.card}>
        <div className={style.wrap}>
        <div className="top_heading left">
          <p className='blue'>Vision</p>
          <h2 className='blue'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi </h2>
        </div>
        </div>
      </div>
    </div>
  </section>


  {/* experience  */}
  <section className={`common_section black_bg ${style.experience_section}`}>
    <div className={`container section_container ${style.container}`}>
      <div className={`top_heading center ${style.top_heading}`}>
        <h2 className='common_heading white'>Built On More Than Experience</h2>
        <p className='white'>Five decades of engineering experience have shaped how we understand requirements, solve manufacturing challenges and deliver precision components for demanding applications.</p>
      </div>
      <div className={style.cards}>
{expCards.map((item,i)=>(
  <div className={style.card} key={i}>
    <Image className={style.icon} src={item.icon} width={80} height={80} alt=''/>
    <h3 className='blue'>{item.title}</h3>
    <p>{item.content}</p>
  </div>
))}
      </div>
    </div>
  </section>
  

  {/* legacy making  */}
  <section className={`common_section ${style.making_section}`}>
    <div className='section_container'>
    <div className={`container  ${style.container}`}>
      <div className={`top_heading left ${style.top_heading}`}>
        <h2 className='common_heading blue'>A Legacy <br className='desktop_break'/>In The Making</h2>
        <p>From a modest beginning to advanced global manufacturing, every milestone has shaped the PMAC we are today.</p>
      </div>
    </div>

    <div className='padding_left_only'>
<Swiper
        modules={ [Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3.7}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        // autoplay={false}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
           700: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 3.7,
            spaceBetween: 30,
          },
        }}
        className={`${style.timelineSwiper} center_pagination padding_left_center_pagination`}
      >

{timeLine.map((item,index)=>(
<SwiperSlide key={index} className={`${style.slide} `} >
  <div className={style.card}>
    <h3 className={`blue ${style.title}`}>{item.title}</h3>
    <h4 className={`blue ${style.year}`}>{item.year}</h4>
    <p>{item.content}</p>
    </div>       
        </SwiperSlide>
))}

      
      </Swiper>
</div>

</div>
  </section>


  {/* leaders  */}
  <section className={`common_section blue_bg ${style.leader_section}`}>
    <div className={`container section_container ${style.container}`}>
      <div className={`top_heading left ${style.top_heading}`}>
<h2 className='common_heading white'>The People Behind The Beginning</h2>
<p className='white'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.</p>
      </div>

<div className={style.cards}>
  <div className={style.card}>
    <div className={style.image}>
      <Image src="/assets/images/balasubramanian.png" width={330} height={399} alt=''/>
    </div>
    <div className={style.content}>
      <div className={style.info}>
        <h3 className={`blue ${style.name}`}>Mr. K. Balasubramanian</h3>
        <p className='blue'>Founder & Chairman</p>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.</p>
    </div>
  </div>

   <div className={style.card}>
    <div className={style.image}>
      <Image src="/assets/images/karthik.png" width={330} height={399} alt=''/>
    </div>
    <div className={style.content}>
      <div className={style.info}>
        <h3 className={`blue ${style.name}`}>Mr. B. Karthik</h3>
        <p className='blue'>Executive Director, PMAC</p>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.</p>
    </div>
  </div>

</div>

    </div>
  </section>


  {/* journey  */}
    <section className={`common_section ${style.journey_section}`}>
      <div className='section_container'>
    <div className={`container  ${style.container}`}>
      <div className={`top_heading left ${style.top_heading}`}>
<h2 className='common_heading blue'>Recognition Along The Journey</h2>
<p className=''>Over the years, PMAC’s commitment to engineering, manufacturing excellence and customer relationships has earned recognition from the industries and organisations we work with.</p>
      </div>

    </div>

     <div className='padding_left_only'>
<Swiper
        modules={ [Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3.7}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        // autoplay={false}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
           700: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        className={`${style.journeySwiper} center_pagination padding_left_center_pagination`}
      >

{certificates.map((item,index)=>(
<SwiperSlide key={index} className={`${style.slide} `} >
  <div className={style.card}>
   <Image src={item} width={300} height={401} alt=''/>
    </div>       
        </SwiperSlide>
))}

      
      </Swiper>
</div>
</div>
  </section>


  {/* map */}
  <section className={`common_section blue_bg ${style.map_section}`}>
<div className={`container section_container ${style.container}`}>
  <div className={`top_heading center ${style.top_heading}`}>
    <h2 className='common_heading white'>Built Here. <br className='desktop_break'/>Trusted Around The World.</h2>
    <p className='white'>From Chennai to global markets, PMAC serves international customers with precision manufacturing expertise, while expanding its presence across the US, Japan, Singapore, China and the UK.</p>
  </div>
  <div className={style.mapArea}>
<Image className={style.map} src="/assets/images/map-vector.svg" width={1128} height={623} alt=''/>
  </div>
</div>
  </section>


  
  </>
  )
}
