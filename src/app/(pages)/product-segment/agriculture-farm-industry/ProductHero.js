import React, { useEffect, useState } from 'react'
import style from "./product-segment.module.css"
import Image from 'next/image';
import Button from '@/app/components/Button';


export default function ProductHero({heroContent}) {

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
     <section className={`${style.heroSection} heroSection`} style={{backgroundImage:!mobile?`url(${heroContent.bgImage})`:''}}>
   {mobile && 
      <Image className={`${style.mobileBanner} mobile_banner`} src={heroContent.mobileImage} width={1148} height={704} alt=''/>
      }
    <div className={`container ${style.container}`}>
     
<div className={`content top_heading left ${style.content} ${style.top_heading}`}>
    <h1 className='common_heading white'>{heroContent.title}</h1>
    <p className='white'>{heroContent.content}</p>    
    <Button link='#' classname="common_btn white_btn" text="Enquire Now" />

</div>
    </div>
  </section>
  )
}
