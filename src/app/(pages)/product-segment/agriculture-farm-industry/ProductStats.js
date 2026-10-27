import React from 'react'
import style from "./product-segment.module.css"

export default function ProductStats({specs}) {

  return (
    <div className={style.specifications}>
                {specs && specs.map((item,i)=>(
                    <div className={style.card} key={i}>
                        <h4 className='blue'>{item.count}</h4>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
  )
}
