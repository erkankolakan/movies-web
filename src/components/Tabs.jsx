"use client"
import Link from 'next/link'
import React from 'react'
import {useSearchParams} from "next/navigation"

const Tabs = () => {

    const searchParams = useSearchParams()
    const genre = searchParams.get("genre")
    
    console.log(genre)
    const tabs = [
        {
            name:"En Populer",
            url:"populer"
        },
        {
            name:"En Son Çıkanlar",
            url:"lates"
        },
        {
            name:"Yakında Gelecekler",
            url:"upcoming"
        }
    ]


  return (
    <div className=' font-bold flex items-center justify-center gap-5  p-5 m-5 bg-gray-200 dark:bg-gray-900 ' >
     {
        tabs.map((tab ,i) => (
            <Link key={i} href={`/?genre=${tab.url}`} className={`'cursor-pointer hover:opacity-75 transition-opacity' ${tab.url=== genre ?  "underline-offset-4 text-amber-500 underline" :" " } `}>{tab.name}</Link>
        ))
     }
    </div> 
  )
}

export default Tabs

// Bu kısım aslında önemlidir biz linki query olarak tür altında verdik. Seçili olan linkin de belirli olarkak gözükebilmesi için useSearcParams kullanarak url üzerinden hangi sayfada olduğumuz aldık. Daha sonra oneifline ile de class a özellikler verdik.