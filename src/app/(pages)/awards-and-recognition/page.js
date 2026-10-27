"use client"

import React, { useEffect, useState } from 'react'
import '../../components/UI/innerpage.css'
import style from "./awards.module.css"
import Button from '@/app/components/Button';
import Image from 'next/image';

const certifications = [
  {
    icon:"/assets/images/cert-icon.svg",
    number:"10000471782-MSC-RvA-IND",
    validity:"17 Nov, 2021 - 16 Nov, 2024",
    asset:"/"
  },
  {
    icon:"/assets/images/cert-icon.svg",
    number:"10000471782-MSC-RvA-IND",
    validity:"17 Nov, 2021 - 16 Nov, 2024",
    asset:"/"
  },
  {
    icon:"/assets/images/cert-icon.svg",
    number:"10000471782-MSC-RvA-IND",
    validity:"17 Nov, 2021 - 16 Nov, 2024",
    asset:"/"
  },
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
  
  <section className={`${style.heroSection} heroSection`} style={{backgroundImage:!mobile?`url(/assets/images/awards-bg.png)`:''}}>
   {mobile && 
      <Image className={`${style.mobileBanner} mobile_banner`} src="/assets/images/about-banner-mobile.png" width={1148} height={704} alt=''/>
      }
    <div className={`container ${style.container}`}>
     
<div className={`content top_heading left ${style.content} ${style.top_heading}`}>
    <h1 className='common_heading white'>Quality Built Into Every Process</h1>
    <p className='white'>At PMAC, quality is a responsibility we carry through every stage of manufacturing, backed by experience, disciplined processes and internationally recognised standards.</p>    
</div>
    </div>
  </section>


{/* award  */}
  <section className={`common_section ${style.approach_section}`}>
    <div className={`container section_container ${style.container}`}>
      <div className={`top_heading ${style.top_heading}`}>
        <h2 className='common_heading blue'>A Quality-First Approach to Precision Engineering</h2>
      </div>
      <div className={style.approach_container}>
        <div className={style.image}>
          <Image src="/assets/images/award.svg" width={388} height={421} alt=''/>
        </div>
        <div className={`top_heading left ${style.content} ${style.top_heading}`}>
<p>At PMAC, Quality is at the core of every procedure. We make sure that the items we manufacture meet both the national and international industry standards for quality as well as the expectations of our clients. With over 40 years of experience, the company has created time-tested quality standards and procedures that will produce products with zero faults and low manufacturing costs.</p>
<ul>
  <li>Our goal has always been to provide our clients with the right solutions. From acquisition of raw materials to the Shipment and delivery of completed goods, every step of the process is subject to quality control, documentation, and oversight.</li>
  <li>Through its successful EHS strategy, the company also prioritizes environmental protection and safety.</li>
  <li>PMAC is fully qualified under ISO 9001 / 14001/45001 via certification from DNV Certification B.V. in the Netherlands.</li>
</ul>
        </div>
      </div>
    </div>
  </section>

  {/* certificate  */}

 <section className={`common_section blue_bg ${style.certificate_section}`}>
    <div className={`container section_container ${style.container}`}>
      <div className={`top_heading center ${style.top_heading}`}>
        <h2 className='common_heading white'>Certifications That Reflect Our Standards</h2>
        <p className='white'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. </p>
      </div>

      <div className={style.cards}>
        {certifications.map((item,i)=>(
 <div className={style.card} key={i}>

  <Image src={item.icon} className={style.icon} width={100} height={100} alt=''/>
  <h3>{item.number}</h3>
  <div className={style.validity}>
    <p className='blue'>Validity</p>
    <p className='blue'>{item.validity}</p>
    </div>

    <a href={item.asset} className='link link_blue'> <Image src="/assets/images/download-icon.svg" width={24} height={24} alt=''/> Download</a>

        </div>
        ))}
       
      </div>

    </div>
  </section>
  
  </>
  )
}
