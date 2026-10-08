"use client";

import React from 'react'
import style from './page.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Button from './components/Button';
import Header from './components/Header/Header';
import FancyText from './components/FancyText';
import Image from 'next/image';
import Link from 'next/link';
import MapLines from './components/MapLines';




const HeroSliderData = [
  {
    title:"Engineered for Precision. Built for Global Industry.",
    content:"PMAC delivers precision-machined and engineered components for demanding OEM and industrial applications, combining advanced manufacturing, engineering expertise and globally aligned quality standards.",
    links:[
      {label:"Explore Our Capabilities",link:"#"},
      {label:"Discuss Your Requirement",link:"#"},
    ]
  },
  {
    title:"Engineered for Precision. Built for Global Industry.",
    content:"PMAC delivers precision-machined and engineered components for demanding OEM and industrial applications, combining advanced manufacturing, engineering expertise and globally aligned quality standards.",
    links:[
      {label:"Explore Our Capabilities",link:"#"},
      {label:"Discuss Your Requirement",link:"#"},
    ]
  },
  {
    title:"Engineered for Precision. Built for Global Industry.",
    content:"PMAC delivers precision-machined and engineered components for demanding OEM and industrial applications, combining advanced manufacturing, engineering expertise and globally aligned quality standards.",
    links:[
      {label:"Explore Our Capabilities",link:"#"},
      {label:"Discuss Your Requirement",link:"#"},
    ]
  },
]


const Stats=[
  {
    text:"Since",
    count:1974,
    increment:false,
    content:"Decades of engineering and manufacturing expertise."
  },
  {
    text:"",
    count:10,
    increment:true,
    content:"Serving diverse industrial applications."
  },
  {
    text:"",
    count:1000,
    increment:true,
    content:"Modern machining, inspection and production capabilities."
  },
  {
    text:"",
    count:1000,
    increment:true,
    content:"Modern machining, inspection and production capabilities."
  },
  {
    text:"",
    count:1000,
    increment:true,
    content:"Modern machining, inspection and production capabilities."
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

const IndustriesData = [
  {
    image:"/assets/images/ind1.png",
    text:"Agriculture & Farm",
    link:"#"
  },
   {
    image:"/assets/images/ind2.png",
    text:"Compressors",
    link:"#"
  },
   
   {
    image:"/assets/images/ind3.png",
    text:"Earthmoving",
    link:"#"
  },
   {
    image:"/assets/images/ind4.png",
    text:"Elevators & Construction",
    link:"#"
  },
  {
    image:"/assets/images/ind5.png",
    text:"Locomotive",
    link:"#"
  },
   {
    image:"/assets/images/ind1.png",
    text:"Agriculture & Farm",
    link:"#"
  },
   {
    image:"/assets/images/ind2.png",
    text:"Compressors",
    link:"#"
  },
   
   {
    image:"/assets/images/ind3.png",
    text:"Earthmoving",
    link:"#"
  },
   {
    image:"/assets/images/ind4.png",
    text:"Elevators & Construction",
    link:"#"
  },
  {
    image:"/assets/images/ind5.png",
    text:"Locomotive",
    link:"#"
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


const ClientsData = [
  "/assets/images/cl1.svg",
  "/assets/images/cl2.svg",
  "/assets/images/cl3.svg",
  "/assets/images/cl4.svg",
  "/assets/images/cl5.svg",
  "/assets/images/cl6.svg",
  "/assets/images/cl7.svg",
  "/assets/images/cl8.svg",
  "/assets/images/cl9.svg",
  "/assets/images/cl10.svg",
  "/assets/images/cl11.svg",
  "/assets/images/cl12.svg",
];


const PartnerData = [
  {
    icon:"/assets/images/partner.svg",
    title:"Proven Engineering Expertise",
    content:"Decades of experience solving demanding machining requirements."
  },
    {
    icon:"/assets/images/partner.svg",
    title:"End-to-End Capability",
    content:"Engineering, machining, inspection and manufacturing support under one ecosystem."
  },
    {
    icon:"/assets/images/partner.svg",
    title:"Advanced Technology",
    content:"Modern machinery and digital technologies supporting accuracy and efficiency."
  },
    {
    icon:"/assets/images/partner.svg",
    title:"Quality-Driven Manufacturing",
    content:"Defined systems and inspection processes focused on consistency."
  },
    {
    icon:"/assets/images/partner.svg",
    title:"Diverse Industry Experience",
    content:"Manufacturing knowledge across multiple industrial applications."
  },
    
   {
    icon:"/assets/images/partner.svg",
    title:"Proven Engineering Expertise",
    content:"Decades of experience solving demanding machining requirements."
  },
    {
    icon:"/assets/images/partner.svg",
    title:"End-to-End Capability",
    content:"Engineering, machining, inspection and manufacturing support under one ecosystem."
  },
    {
    icon:"/assets/images/partner.svg",
    title:"Advanced Technology",
    content:"Modern machinery and digital technologies supporting accuracy and efficiency."
  },
    {
    icon:"/assets/images/partner.svg",
    title:"Quality-Driven Manufacturing",
    content:"Defined systems and inspection processes focused on consistency."
  },
    {
    icon:"/assets/images/partner.svg",
    title:"Diverse Industry Experience",
    content:"Manufacturing knowledge across multiple industrial applications."
  },
    
]


export default function page() {
  return (
    <>

        <Header headerStyle="transparent" />

    
    {/* hero section  */}
    
    <section className={`common_section ${style.heroSection}`}>
      <div className={`container ${style.container}`}>

 <Swiper
        modules={ [Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        speed={1000}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        // autoplay={false}
        loop={true}
        className={`${style.heroSwiper} white_pagination`}
      >

{HeroSliderData.map((item,index)=>(
<SwiperSlide key={index} className={style.slide}>
  {
    index===0 ? <h1 className='common_heading'>{item.title}</h1> : <h2 className='common_heading'>{item.title}</h2>
  }
          

          
          <p>{item.content}</p>
          <div className={style.buttons}>
            <Button link={item.links[0].link} classname="common_btn white_btn" text={item.links[0].label} />
            <Button link={item.links[1].link} classname="common_btn white_stroked_btn" text={item.links[1].label}/>

          </div>
        </SwiperSlide>
))}

      
      </Swiper>

      </div>
    </section>

    {/* stats section  */}
<section className={`common_section_inner blue_bg ${style.statsSection}`}>

  <div className={`container ${style.container}`}>

    <div className={style.statsCounters}>
      {Stats.map((item,index)=>(
        <div className={style.stat} key={index}>
          <h2 className='white'>{item.text && item.text} {item.count && item.count} {item.increment?"+":""}</h2>
          <p className='white'>{item.content}</p>
        </div>
      ))}
    </div>

<div className={style.fancyText}>
    <FancyText/>
    </div>



  </div>

</section>

{/* business section  */}
<section className={`common_section   ${style.businessSection}`}>
<div className={`container ${style.container}`}>

  <div className={style.left}>
<h2 className='common_heading'>Precision Has Been Our Business for Generations</h2>
<Image src="/assets/images/business_img.svg" width={641} height={471} alt=''/>
  </div>

   <div className={style.right}>
<Image src="/assets/images/business-group.svg" width={641} height={471} alt=''/>
<div className={style.content}>
  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. </p>
  <Button link="#" classname="common_btn blue_btn" text="Discover PMAC"/>
</div>
  </div>


</div>
</section>

{/* manufacture section  */}
<section className={`common_section_inner blue_bg ${style.manufactureSection}`}>

  <div className={`section_container`}>

<div className={`container`}>
  <div className={`top_heading`}>

    <div className='left'>
<h2 className='common_heading white'>Engineering Ideas Into Manufacturable Solutions</h2>

    </div>

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
        className={`${style.manufactureSwiper} center_pagination padding_left_center_pagination white_pagination`}
      >

{ManufactureData.map((item,index)=>(
<SwiperSlide key={index} className={`${style.slide} ${ index % 3 === 0 ? style.first : index % 3 === 1 ? style.second : style.third }`} >

  {index % 3 === 2 && 
 <h3 className='common_heading'>{item.title}</h3> 
 }

<div className={style.content}>
  {index % 3 !== 2 && 
 <h3 className='common_heading'>{item.title}</h3> 
 }
 <p>{item.content}</p>
 <Button link={item.link} classname="link link_blue" text="Learn more"/>

</div>

<div className={style.image}>
  <Image src={item.image} width={410} height={362} alt={item.title}/>
</div>

          

          
        </SwiperSlide>
))}

      
      </Swiper>
</div>

  </div>

</section>


{/* industries section  */}
<section className={`common_section ${style.industriesSection}`}>

  <div className={`section_container`}>

<div className={`container`}>
  <div className={`top_heading center`}>


<h2 className='common_heading'>Precision Across Industries</h2>
<p>Engineering requirements change from one industry to another. Our manufacturing expertise is built to adapt.</p>
  <Button link="#" classname="common_btn blue_btn" text="View All Industries"/>
  </div>


</div>

<div className='padding_left_only'>
<Swiper
        modules={ [Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={4.9}
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
            slidesPerView:4,
            spaceBetween: 30,
          },
           1600: {
            slidesPerView:4.95,
          },
        }}
        className={`${style.industriesSwiper} center_pagination padding_left_center_pagination`}
      >

{IndustriesData.map((item,index)=>(
<SwiperSlide key={index} className={`${style.slide}`} >

<Link href={item.link}>
  <Image src={item.image} width={410} height={362} alt={item.text}/>
 <h3 className='white'>{item.text}</h3> 

</Link>
          

          
        </SwiperSlide>
))}

      
      </Swiper>
</div>

<div className={`container ${style.cabability}`}>
  <div className={style.cababilityContainer}>
  <div className={style.left}>
    <h3 className='blue'>Looking for the Right Capability for Your Requirement?</h3>
     <div className={style.buttons}>
            <Button link="#" classname="common_btn blue_btn" text='Discuss Your Requirement' />
            <Button link="#" classname="common_btn blue_stroked_btn" text="Explore Our Capabilities"/>
          </div>
  </div>

  <div className={style.right}>
    <h4 className='blue'>Available Manufacturing Capabilities </h4>
    <Image src='/assets/images/graph.svg' width={428} height={87} alt=''/>
  </div>
</div>

</div>



  </div>

</section>


{/* engineer section  */}
<section className={`common_section black_bg ${style.engineerSection}`}>
<div className={`container ${style.container}`}>
  <div className={style.left}>
 <div className={`top_heading left`}>
<h2 className='common_heading white'>Where Engineering Meets Execution</h2>
<p className='white'>Our manufacturing ecosystem combines modern infrastructure, precision machinery, process expertise and inspection capabilities to deliver consistency from one component to the next.</p>
  <Button link="#" classname="common_btn white_btn" text="Explore Manufacturing"/>
  </div>

  <div className={style.image}>
    <Image src="/assets/images/engineer.png" width={490} height={475} alt=''/>
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

{/* client section  */}
<section className={`common_section_inner black_bg ${style.clientSection}`}>
  <div className={`section_container`}>

<div className={`container ${style.container}`}>
  <div className={`top_heading`}>
    <div className={`left ${style.left}`}>
<h2 className='common_heading white'>Trusted by Industry Leaders</h2>
<p className='white'>Our long-standing relationships with leading businesses are built on consistent quality, engineering expertise and dependable manufacturing support.</p>
    </div>
  </div>
</div>


<div className={style.clientsMarquee_section}>

  <div className={style.marqueeSingle}>
    {[...ClientsData,...ClientsData].map((item,index)=>(
      <div className={style.logo} key={index}> <Image src={item} width={190} height={120} alt=''/> </div>
    ))}
  </div>

  <div className={`${style.marqueeSingle} ${style.reverse}`}>
    {[...ClientsData].reverse().concat([...ClientsData].reverse()).map((item, index) => (
  <div className={style.logo} key={index}>
    <Image src={item} width={190} height={120} alt="" />
  </div>
))}
  </div>

</div>




  </div>
</section>

{/* partner section  */}

<section className={`common_section ${style.partnerSection}`}>

  <div className={`section_container`}>

<div className={`container`}>
  <div className={`top_heading center`}>


<h2 className='common_heading'>A Manufacturing Partner Built Around Your Requirements.</h2>
  <Button link="#" classname="common_btn blue_btn" text="Know More"/>
  </div>


</div>

<div className='padding_left_only'>
<Swiper
        modules={ [Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={4.9}
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
            slidesPerView:4,
          },
           1600: {
            slidesPerView:4.9,
          },
        }}
        className={`${style.partnerSwiper} center_pagination padding_left_center_pagination`}
      >

{PartnerData.map((item,index)=>(
<SwiperSlide key={index} className={`${style.slide}`} >

<div className={style.image}> <Image src={item.icon} width={80} height={80} alt=''/> </div>

<div className={style.content}>
<h3 className='blue'>{item.title}</h3>         
<p>{item.content}</p>
</div>

          
        </SwiperSlide>
))}

      
      </Swiper>
</div>

  </div>

</section>


<section className={`common_section_inner blue_bg ${style.trustedSection}`}>
  <div className={`container ${style.container}`}>
    <div className={style.left}>
      <h2 className='common_heading white'>Precision <br className='desktop_break'/>Made in India. Trusted Beyond Borders.</h2>
      <p className='white'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
        <Button link="#" classname="common_btn white_btn" text="Explore PRECIMAC"/>

    </div>
    <div className={style.right}>
      <Image src="/assets/images/map-bg.svg" width={1010} height={558} alt=''/>
      <div className={style.mapLines}><MapLines/></div>
    </div>
  </div>
</section>

    </>
  )
}
