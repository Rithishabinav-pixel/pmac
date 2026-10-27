"use client"

import React, { useEffect, useState } from 'react'
import '../../../components/UI/innerpage.css'
import style from "./product-segment.module.css"
import Button from '@/app/components/Button';
import Image from 'next/image';
import ProductsGrid from './ProductsGrid';
import ProductHero from './ProductHero';
import ProductStats from './ProductStats';


const heroContent = {
    title:"Lorem ipsum dolor amet consectetur.",
    content:"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.",
    bgImage:"/assets/images/agriculture-farm-bg.png",
    mobileImage:"/assets/images/agriculture-farm-bg.png"
}

const specs = [
    {
        count:"10+",
        text:"Components manufactured"
    },
    {
        count:"20+",
        text:"Materials Used"
    },
    {
        count:"1000+",
        text:"Parameters Quality Checked"
    },
    {
        count:"1000+",
        text:"Parameters Quality Checked"
    },
]


const products = [
    {
        image:"/assets/images/case-transmission.png",
        productName:"Case Transmission",
        weight:"25 Kgs to 500 Kgs",
        material:"Cast Iron"
    },
     {
        image:"/assets/images/centre-housing.png",
        productName:"Centre Housing",
        weight:"25 Kgs to 500 Kgs",
        material:"Cast Iron"
    },
     {
        image:"/assets/images/multispeed-gearbox.png",
        productName:"Multispeed Gearbox",
        weight:"25 Kgs to 500 Kgs",
        material:"Cast Iron"
    },
     {
        image:"/assets/images/front-axle.png",
        productName:"Front Axle",
        weight:"25 Kgs to 500 Kgs",
        material:"Cast Iron"
    },
     {
        image:"/assets/images/hydraulic-lift-cover.png",
        productName:"Hydraulic Lift Cover",
        weight:"25 Kgs to 500 Kgs",
        material:"Cast Iron"
    },
     {
        image:"/assets/images/front-engine-support.png",
        productName:"Front Engine Support",
        weight:"25 Kgs to 500 Kgs",
        material:"Cast Iron"
    },
]

export default function page() {

      

  return (
    <>
    
        {/* hero section  */}

  <ProductHero heroContent={heroContent}/>

  {/* about  */}
    <section className={`common_section ${style.about_section}`}>
        <div className={`${style.container} container`}>
            <div className={style.content}>
                <h2 className='common_heading blue'>Lorem ipsum dolor sit amet consectetur.</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Pellentesque sodales neque ipsum orci a. Mi metus urna scelerisque aenean. Neque urna morbi ultrices erat. Sit elementum nunc sed tempor ac velit viverra faucibus vel. A et amet hendrerit morbi elit. Egestas odio nam habitant a. Varius risus elementum proin molestie pulvinar quisque.</p>
            <h3 className="blue">Specifications</h3>
            <ProductStats specs={specs}/>
            </div>
            <div className={style.image}>
                <Image src="/assets/images/truck.svg" width={682} height={540} alt=''/>
            </div>
        </div>
    </section>








      {/* product  */}
    <section className={`common_section blue_bg ${style.products_section}`}>
        <div className={`${style.container} container section_container`}>
            <div className={`top_heading center`}>
                <h2 className='common_heading white'>Lorem ipsum dolor sit amet consectetur.</h2>
                <p className='white'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.</p>
           <Button link="#" classname={`common_btn white_btn`} text={`Enquire Now`}/>
            </div>


            <ProductsGrid products={products}/>
           
        </div>
    </section>



    </>
  )
}
