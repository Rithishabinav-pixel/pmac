import React from 'react'
import style from './about.module.css'
import '../../components/UI/innerpage.css'
import Button from '@/app/components/Button'

export default function page() {
  return (
  <>
  
  
  {/* hero section  */}
  
  <section className={`${style.heroSection} heroSection`} style={{backgroundImage:`url(/assets/images/about-banner.png)`}}>
    <div className='container'>
<div className='content'>
    <h1 className='common_heading white'>Lorem ipsum dolor amet consectetur.</h1>
    <p className='white'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.</p>
    <Button link='#' classname="common_btn white_btn" text="Enquire Now" />
    
</div>
    </div>
  </section>
  
  
  
  
  
  
  
  </>
  )
}
