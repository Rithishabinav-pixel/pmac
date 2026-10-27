"use client"
import React, { useEffect, useRef, useState } from 'react'
import '../../components/UI/innerpage.css'
import style from './infrastructure.module.css'
import Image from 'next/image';
import Button from '@/app/components/Button';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const stats = [
    {
        title:"50+ Years",
        text:"Engineering & Manufacturing Expertise"
    },
     {
        title:"1 Lakh Sq. Ft.",
        text:"Integrated Manufacturing Facility"
    },
     {
        title:"100+",
        text:"Advanced CNC & Production Equipment"
    },
     {
        title:"10+",
        text:"Integrated Manufacturing Capabilities"
    },

]

const EngineerData = [
  {
    icon:"/assets/images/e1.svg",
    title:"Advanced Infrastructure",
    content:"Manufacturing facilities designed to support diverse machining and production requirements."
  },
  {
    icon:"/assets/images/e2.svg",
    title:"Precision Machinery",
    content:"Horizontal and vertical machining, turning, boring, milling, grinding and specialised machining capabilities."
  },
  {
    icon:"/assets/images/e3.svg",
    title:"Quality & Metrology",
    content:"Advanced CMM and metrology capabilities help maintain accuracy throughout production."
  },
  {
    icon:"/assets/images/e4.svg",
    title:"Packaging & Global Logistics",
    content:"Supporting components beyond production through packaging and international delivery requirements."
  },
  {
    icon:"/assets/images/e5.svg",
    title:"Technology & Innovation",
    content:"Digital technologies, including Augmented Reality, enable greater collaboration and visibility across manufacturing activities."
  },
]


const processData = [
    {
        icon:"/assets/images/process_icon1.svg",
        title:"Lorem ipsum dolor sit amet consectetur",
        content:"Lorem ipsum dolor sit amet consectetur. Mauris eu sed sed"
    },
    {
        icon:"/assets/images/process_icon1.svg",
        title:"Lorem ipsum dolor sit amet consectetur",
        content:"Lorem ipsum dolor sit amet consectetur. Mauris eu sed sed"
    },
    {
        icon:"/assets/images/process_icon1.svg",
        title:"Lorem ipsum dolor sit amet consectetur",
        content:"Lorem ipsum dolor sit amet consectetur. Mauris eu sed sed"
    },
    {
        icon:"/assets/images/process_icon1.svg",
        title:"Lorem ipsum dolor sit amet consectetur",
        content:"Lorem ipsum dolor sit amet consectetur. Mauris eu sed sed"
    },
    {
        icon:"/assets/images/process_icon1.svg",
        title:"Lorem ipsum dolor sit amet consectetur",
        content:"Lorem ipsum dolor sit amet consectetur. Mauris eu sed sed"
    },
    {
        icon:"/assets/images/process_icon1.svg",
        title:"Lorem ipsum dolor sit amet consectetur",
        content:"Lorem ipsum dolor sit amet consectetur. Mauris eu sed sed"
    },
    {
        icon:"/assets/images/process_icon1.svg",
        title:"Lorem ipsum dolor sit amet consectetur",
        content:"Lorem ipsum dolor sit amet consectetur. Mauris eu sed sed"
    },
]


const ManufactureData = [
  {
 title:"Engineering & Product Development",
 content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
 link:"#",
 image:"/assets/images/man1.png"
  },
    {
 title:"Engineering & Product Development",
 content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
 link:"#",
 image:"/assets/images/man2.png"
  },
    {
 title:"Engineering & Product Development",
 content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
 link:"#",
 image:"/assets/images/man3.png"
  },
    {
 title:"Engineering & Product Development",
 content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
 link:"#",
 image:"/assets/images/man4.png"
  },
    {
 title:"Engineering & Product Development",
 content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
 link:"#",
 image:"/assets/images/man1.png"
  },
    {
 title:"Engineering & Product Development",
 content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
 link:"#",
 image:"/assets/images/man2.png"
  },
    {
 title:"Engineering & Product Development",
 content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
 link:"#",
 image:"/assets/images/man3.png"
  },
    {
 title:"Engineering & Product Development",
 content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
 link:"#",
 image:"/assets/images/man4.png"
  },

]

const products = [
    {
         image:"/assets/images/man1.png",
         content:"Lorem ipsum dolor sit amet consectetur. Pellentesque sodales neque ipsum orci Mi",
        productName:"Horizontal Machining Centre",
        weight:"25 Kgs to 500 Kgs",
    },
     {
         image:"/assets/images/man1.png",
         content:"Lorem ipsum dolor sit amet consectetur. Pellentesque sodales neque ipsum orci Mi",
        productName:"Centre Housing",
        weight:"25 Kgs to 500 Kgs",
    },
     {
         image:"/assets/images/man1.png",
         content:"Lorem ipsum dolor sit amet consectetur. Pellentesque sodales neque ipsum orci Mi",
        productName:"Multispeed Gearbox",
        weight:"25 Kgs to 500 Kgs",
    },
     {
         image:"/assets/images/man1.png",
         content:"Lorem ipsum dolor sit amet consectetur. Pellentesque sodales neque ipsum orci Mi",
        productName:"Front Axle",
        weight:"25 Kgs to 500 Kgs",
    },
    {
         image:"/assets/images/man1.png",
         content:"Lorem ipsum dolor sit amet consectetur. Pellentesque sodales neque ipsum orci Mi",
        productName:"Horizontal Machining Centre",
        weight:"25 Kgs to 500 Kgs",
    },
     {
         image:"/assets/images/man1.png",
         content:"Lorem ipsum dolor sit amet consectetur. Pellentesque sodales neque ipsum orci Mi",
        productName:"Centre Housing",
        weight:"25 Kgs to 500 Kgs",
    },
     {
         image:"/assets/images/man1.png",
         content:"Lorem ipsum dolor sit amet consectetur. Pellentesque sodales neque ipsum orci Mi",
        productName:"Multispeed Gearbox",
        weight:"25 Kgs to 500 Kgs",
    },
     {
         image:"/assets/images/man1.png",
         content:"Lorem ipsum dolor sit amet consectetur. Pellentesque sodales neque ipsum orci Mi",
        productName:"Front Axle",
        weight:"25 Kgs to 500 Kgs",
    }
]



export default function page() {

     const [mobile,setMobile] = useState(false);
     const [play,setPlay] = useState(false);
       const videoRef = useRef(null)
    
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


          useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (play) {
      video.play()
    } else {
      video.pause()
    }
  }, [play])

  return (
   <>
     {/* hero section  */}
  
  <section className={`${style.heroSection} heroSection`} style={{backgroundImage:!mobile?`url(/assets/images/infra-banner.png)`:''}}>
   {mobile && 
      <Image className={`${style.mobileBanner} mobile_banner`} src="/assets/images/about-banner-mobile.png" width={1148} height={704} alt=''/>
      }
    <div className={`container ${style.container}`}>
     
<div className={`content ${style.content} top_heading left ${style.top_heading}`}>
    <h1 className='common_heading white'>Lorem ipsum dolor amet consectetur.</h1>
    <p className='white'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.</p>
    <Button link='#' classname="common_btn white_btn" text="Enquire Now" />
    
</div>
    </div>
  </section>

  {/* video section  */}
   <section className={`common_section ${style.video_section}`}>
    <div className={`container section_container ${style.container}`}>
        <div className={`top_heading center`}>
            <h2 className='common_heading blue'>Lorem ipsum dolor sit amet consectetur.</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Pellentesque sodales neque ipsum orci a. Mi metus urna scelerisque aenean. Neque urna morbi ultrices erat. Sit elementum nunc sed tempor ac velit viverra faucibus vel. A et amet hendrerit morbi elit.</p>
        </div>

        <div className={style.videoContainer}>
            <div className={style.video}>
                <video ref={videoRef}
      width="1280"
      height="720"
      poster="/assets/images/infra-video-poster.png"
      preload="none"
      autoPlay={play}
      muted={play}
      playsInline 
      loop
    >
      <source src="/assets/videos/infra-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      <button className={style.playBtn} onClick={()=>setPlay(!play)}>
                <span></span>
                <span></span>
                <span></span>
                {play?
                <Image  className={style.pause} src="/assets/images/pause.svg" width={36} height={36} alt=''/>
            :
            <Image  src="/assets/images/play.svg" width={36} height={36} alt=''/>
            }
                
            </button>
            </div>

            <div className={style.stats}>
                {stats.map((item,i)=>(
                    <div className={style.card} key={i}>
                        <h3 className='white'>{item.title}</h3>
                        <p className='white'>{item.text}</p>
                    </div>
                ))}
            </div>

          

        </div>


    </div>
   </section>


   {/* engineer section  */}
<section className={`common_section black_bg ${style.engineerSection}`}>
<div className={`container ${style.container}`}>
  <div className={style.left}>
 <div className={`top_heading left`}>
<h2 className='common_heading white'>Lorem ipsum dolor amet</h2>
<p className='white'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.</p>
  <Button link="#" classname="common_btn white_btn" text="Explore Manufacturing"/>
  </div>

  <div className={style.image}>
    <Image src="/assets/images/infra-man.png" width={520} height={648} alt=''/>
    <Image className={style.light} src="/assets/images/light.svg" width={520} height={450} alt=''/>
  </div>

  </div>

  <div className={style.right}>
    {EngineerData.map((item,index)=>(
      <div className={style.card} key={index}>
        <Image src={item.icon} width={80} height={80} alt={item.title}></Image>
        <h3 className='white'>{item.title}</h3>
        <p className='white'>{item.content}</p>
      </div>
    ))}
  </div>



</div>
</section>

{/* chain  */}

<section className={`${style.chain_section} black_bg`}>
    <div className={`container ${style.container}`}>
        <div className={`${style.content} top_heading left`}>
<h2 className='common_heading white'>Lorem ipsum dolor amet</h2>
<p className='white'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.</p>
        </div>
        <div className={style.image}>
            <Image src="/assets/images/infra-chain.svg" width={509} height={478} alt=''/>
        </div>
    </div>
</section>


{/* process  */}

<section className={`common_section ${style.process_section}`}>
    <div className={`container section_container ${style.container}`}>
        <div className={`top_heading center`}>
<h2 className='common_heading blue'>Lorem ipsum dolor sit</h2>
<p>Lorem ipsum dolor sit amet consectetur. Pellentesque sodales neque ipsum orci a. Mi metus urna scelerisque aenean. Neque urna morbi ultrices erat.</p>
        </div>
        
        <div className={style.processCards}>
{processData.map((item,index)=>(
    <div className={style.card} key={index}>
        <Image src={item.icon} width={56} height={56} alt=''/>
        <div className={style.content}>
        <h3 className='blue'>{item.title}</h3>
        <p>{item.content}</p>
        </div>
    </div>
))}
        </div>


    </div>
</section>



{/* manufacture section  */}
<section className={`common_section_inner blue_bg ${style.manufactureSection}`}>

  <div className={`section_container`}>

<div className={`container`}>
  <div className={`top_heading center`}>

  
<h2 className='common_heading white'>Lorem ipsum dolor sit</h2>
<p className='white'>Lorem ipsum dolor sit amet consectetur. Pellentesque sodales neque ipsum orci a. Mi metus urna scelerisque aenean. Neque urna morbi ultrices erat.</p>

  

    <div className='right'>
  <Button link="#" classname="common_btn white_btn" text="Explore Our Capabilities"/>
    </div>

  </div>


</div>

<div className='padding_left_only'>
<Swiper
        modules={ [Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3.7}
        pagination={{ clickable: true }}
        // autoplay={{ delay: 3000, disableOnInteraction: false }}
        autoplay={false}
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
        className={`${style.manufactureSwiper} center_pagination padding_left_center_pagination white_pagination`}
      >

{products.map((item,index)=>(
<SwiperSlide key={index} className={`${style.slide} ${ index % 3 === 0 ? style.first : index % 3 === 1 ? style.second : style.third }`} >

  {index % 3 === 2 && 
 <h3 className='common_heading'>{item.productName}</h3> 
 }

<div className={style.content}>
  {index % 3 !== 2 && 
 <h3 className='common_heading'>{item.productName}</h3> 
 }
 <p>{item.content}</p>
<div className={style.weightLabel}> <p className={`${style.label} blue ${style.weight}`}>Weight :</p> <p className='blue'>{item.weight}</p> </div>
</div>

<div className={style.image}>
  <Image src={item.image} width={410} height={362} alt={item.productName}/>
</div>

          

          
        </SwiperSlide>
))}

      
      </Swiper>
</div>

  </div>

</section>


{/* digital quality */}

<section className={`common_section ${style.digital_section}`}>
    <div className={`container ${style.container} section_container`}>
        <div className={`${style.content} top_heading left`}>
            <h2 className='common_heading blue'>
                Digital Quality, Built Into Every Process
            </h2>
            <p>PMAC’s Digital Quality Management System (DQMS) strengthens quality management through a structured and digitally enabled approach. It supports consistent processes, quality control and greater visibility across manufacturing operations, complementing the inspection and measurement systems that help ensure precision at every stage.</p>
        </div>
        {mobile && 
        <Image className={style.mobileImg} src="/assets/images/digital-quality-bg.png" width={1055} height={792} alt=''/>
        }
    </div>
</section>




{/* business section  */}
<section className={`common_section blue_bg ${style.business_section}`}>
    <div className={`container ${style.container}`}>
<div className={`top_heading left ${style.content}`}>
<Image src="/assets/images/business_badge.png" width={73} height={87} alt=''/>
<h2 className='common_heading white'>Lorem ipsum dolor sit amet consectetur.</h2>
<p className='white'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.</p>
</div>
<div className={style.image}>
    <Image src="/assets/images/businessman.png" width={719} height={636} alt=''/>
        <Image className={style.light} src="/assets/images/light.svg" width={520} height={450} alt=''/>

</div>
    </div>
</section>

   </>
  )
}
