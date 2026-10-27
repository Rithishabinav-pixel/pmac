import React from 'react'
import style from "./product-segment.module.css"
import Image from 'next/image'



export default function ProductsGrid({products}) {
  return (
    <div className={style.cards}>
                {products.map((item,i)=>(
  <div className={style.card} key={i}>
                    <div className={style.image}>
                        <Image src={item.image} width={410} height={417.5} alt=''/>
                    </div>
                    <div className={style.content}>
                        <h3>{item.productName}</h3>
                        <div> <p className={`${style.label} ${style.weight}`}>Weight :</p> <p>{item.weight}</p> </div>
                        <div> <p className={`${style.label} ${style.material}`}>Material :</p> <p>{item.material}</p> </div>

                    </div>
                </div>
                ))}
              
            </div>
  )
}
