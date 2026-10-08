"use client"
import React, { useEffect, useState } from 'react'
import style from "./Header.module.css"
import Link from 'next/link'
import Image from 'next/image'
import Button from '../Button'
import Topbar from '../Topbar/Topbar'

const NavLinks = [
  {
    label:"About us",
    link:"#"
  },
  {
    label:"Industries",
    link:"#",
    children:[
      { label:"Indutries1",link:"#"},{ label:"Indutries1",link:"#"},{ label:"Indutries1",link:"#"},{ label:"Indutries1",link:"#"},
    ]
  },
  {
    label:"Capability",
    link:"#",
    children:[
      { label:"Capability1",link:"#"},{ label:"Capability1",link:"#"},{ label:"Capability1",link:"#"},{ label:"Capability1",link:"#"},
    ]
  },
   {
    label:"Manufacturing",
    link:"#"
  },
  {
    label:"Sustainability",
    link:"#"
  },
  {
    label:"Resources",
    link:"#",
    children:[
      { label:"Resources1",link:"#"},{ label:"Resources1",link:"#"},{ label:"Resources1",link:"#"},{ label:"Resources1",link:"#"},
    ]
  },
  {
    label:"Contact us",
    link:"#"
  },
]

export default function Header({headerStyle}) {


  const [mobile,setMobile] = useState(false);
const [mobileMenu,setMobileMenu] = useState(false);

const [scrolled,setScrolled] = useState(false);


  useEffect(()=>{

    const checkDevice = () =>{
      setMobile(window.innerWidth<1200);
    }

    checkDevice();

     const checkScroll = () =>{
    const isScrolled = window.scrollY>100;
    setScrolled(isScrolled);
    }


    window.addEventListener("scroll",checkScroll);
    window.addEventListener("resize",checkDevice);

    return(()=>{
    window.removeEventListener("scroll",checkScroll);
    window.removeEventListener("resize",checkDevice);
  
    })

   

  },[])

  return (

    <>
<Topbar/>
    <header id={style.header} className={`${headerStyle && !mobile ? style[headerStyle] : ""} ${scrolled?style.fixed:""}`} >
        <div className={`container ${style.container}`}>

<Link href="/" className={style.logo}>
<Image src="/assets/images/logo.svg" width={235} height={61} alt='logo'/>
</Link>


{mobile && 
<button className={style.mobileMenu_btn} onClick={()=>setMobileMenu(true)}>
  <Image src="/assets/images/menu.svg" width={24} height={24} alt='menu'/>
</button>
}

<nav className={`${mobile?style.mobileNav:""} ${mobileMenu?style.open:""}`}>

{mobile && 
<button className={style.mobileNav_close} onClick={()=>setMobileMenu(false)}>
  <Image src="/assets/images/close.svg" width={24} height={24} alt='close'/>
</button>
}

  <ul>

{NavLinks.map((item,index)=>(
  <li key={index}> 
  <Link href={item.link}>
  {item.label}
  {item.children && <Image src="/assets/images/arrow-down.svg" width={16} height={16} alt=''/>} 
  </Link>
  </li>
))}

  </ul>

<Button link="#" classname={`common_btn ${mobile || !headerStyle?"blue_btn":"white_btn"}`} text="Enquire Now"/>



</nav>



        </div>
    </header>
    </>
  )
}
