import React from 'react'
import style from './Footer.module.css'
import Button from '../Button'
import Link from 'next/link'
import Image from 'next/image'

const menuLinks = [
    {
        label:"Quick Links",
        menu:[
            {label:"Home",link:"#"},
            {label:"About Us",link:"#"},
            {label:"Industries",link:"#"},
            {label:"Manufacturing",link:"#"},
            {label:"Sustainability",link:"#"},
            {label:"Careers",link:"#"},
            {label:"Feedbacks",link:"#"},
            {label:"Contact Us",link:"#"},
        ]
    },
     {
        label:"Capability",
        menu:[
            {label:"Engineering & Product Development",link:"#"},
            {label:"Design for Manufacturability (DFM)",link:"#"},
            {label:"Prototype & New Product Development",link:"#"},
            {label:"Material Expertise ",link:"#"}
        ]
    },
      {
        label:"Resources",
        menu:[
            {label:"Blogs",link:"#"},
            {label:"Case Studies",link:"#"},
            {label:"News & Events",link:"#"},
            {label:"FAQ’s",link:"#"}
        ]
    },
]

export default function Footer() {
  return (
  <footer className={`black_bg`} id={style.footer}>

<div className={`common_section ${style.common_section}`}>

    <div className={`container ${style.container} ${style.ctaContainer}`}>
    <div className={style.cta}>
        <h2 className='common_heading white'>Let's Engineer the Right Solution.</h2>
        <p className='white'>Share your drawing, specification or manufacturing requirement with our team and explore how PMAC can support your next project.</p>
        <div className={style.buttons}>
         <Button link="#" classname="common_btn white_btn" text='Send Your Requirement' />
         <Button link="#" classname="common_btn white_stroked_btn" text='Contact Our Team' />
        </div>
        <div className={style.linkCta}>
            <p className='white'>Looking for a specific machining capability? </p> <Button link="#" classname="link link_white" text="Learn more"/>
            
        </div>
        </div>
    </div>

    <div className={`container ${style.containerWrapper}`}>

    <div className={` ${style.container} ${style.actionsContainer}`}>

        <div className={`${style.column} ${style.logo}`}>
            <Link href="/" className={style.logo}>
<Image src="/assets/images/logo.svg" width={300} height={78} alt='logo'/>
</Link>
        </div>

{menuLinks.map((item,index)=>(
  <div key={index} className={`${style.column} ${style.menuItems}`}>
            <h3 className='white'>{item.label}</h3>
            <ul>
            {item.menu.map((menu,i)=>(
<li key={i}> <Link href={menu.link}>{menu.label}</Link> </li>
            ))}
</ul>
         </div>
))}
       

    </div>


 <div className={` ${style.container} ${style.othersContainer}`}>
       
       <div className={style.contactInfo}>
        <h3 className='white'>Contact Info</h3>
        <ul>
            <li> <a target='_blank' href="tel:044-47193023"> <Image src="/assets/images/call.svg" width={24} height={24} alt=''/>044-47193023 </a> </li>
            <li> <a target='_blank' href="mailto:marketing@pmacindia.com"> <Image src="/assets/images/mail.svg" width={24} height={24} alt=''/>marketing@pmacindia.com</a> </li>
            <li> <a target='_blank' href="https://maps.app.goo.gl/erTCmCEGaGzM5Tw1A"> <Image src="/assets/images/location.svg" width={24} height={24} alt=''/>B70/2, Sipcot Industrial Park, Irungattukottai, Sriperumpudur,<br/>Chennai - 602105</a> </li>

        </ul>
       </div>

       <div className={style.newsletter}>
        <h3 className='white'>Subscribe to Our Newsletter</h3>
        <p className='white'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. </p>
        <form>
            <input type='email' placeholder='Enter your email address' required/>
            <button type='submit'>Submit</button>
        </form>
       </div>

    </div>

    <div className={`  ${style.container} ${style.bottomContainer}`}>
<p className='white'>Precision Machine & Auto Components (P) Ltd. Copyright © 2026</p>
<ul>
    <li> <Link href="#"> Terms of Service</Link> </li>
        <li> <Link href="#"> Privacy Policy</Link> </li>

</ul>
    </div>


</div>

</div>

  </footer>
  )
}
