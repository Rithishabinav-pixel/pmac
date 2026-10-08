"use client"

import React, { useEffect, useState } from 'react'
import style from './Topbar.module.css'
import Image from 'next/image'

// social links 
const SocialLinkData = [
    {
        icon:"/assets/images/fb.svg",
        link:"#"
    },
    {
        icon:"/assets/images/x.svg",
        link:"#"
    },
    {
        icon:"/assets/images/insta.svg",
        link:"#"
    },
    {
        icon:"/assets/images/yt.svg",
        link:"#"
    },
]


const TopLinks = [
     {
        text:"Careers",
        link:"#"
    },
    {
        text:"Feedbacks",
        link:"#"
    },
]


export default function Topbar() {

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
    <div className={style.topbar}>

<div className={`container ${style.container}`}>
{!mobile && 
<ul className={style.socialLinks}>
    {SocialLinkData.map((item,index)=>(
        <li key={index}> <a href={item.link}> <Image src={item.icon} width={24} height={24} alt=''/> </a> </li>
    ))}
</ul>
}

<ul className={style.topLinks}>
    <li> <a href="tel:04447193023"> <Image src="/assets/images/call.svg" width={24} height={24} alt=''/> 044-47193023</a>  </li>
{TopLinks.map((item,index)=>(
        <li key={index}> <a href={item.link}> {item.text} </a> </li>
    ))}
</ul>

</div>


    </div>
  )
}
