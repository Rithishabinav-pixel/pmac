import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

export default function Button({link,classname,text}) {

  const icon = classname.includes('link');

  return (
    <Link href={link} className={classname}>{text} {icon && <Image src="/assets/images/arrow-right.svg" width={24} height={24} alt='' /> }  </Link>
  )
}
