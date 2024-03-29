"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from "framer-motion"


const Movies = ({dt}) => {

  const router = useRouter();

  return (
    //resimlere özellik vermke için resmi nerden gönderdiiysek 
    <div style={{display:"inlineBlock"}} onClick={() => router.push(`/movie/${dt?.id}`)} className='w-[450px] overflow-hidden relative cursor-pointer ' >
        <Image  style={{objectFit:'cover'}} width={450} height={300} src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`}  />
{/* ben bu özelliklerin resmin üzerine geldiğim zaman gözükmesini istiyorum, o yüzden aşağıdaki gibi yapıyorum */}
        <div className='erkan absolute bottom-0 p-2 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity '> 
           <div className='font-bold text-2xl'>{dt?.original_title}</div>
           <div>{dt?.release_date} - {dt?.vote_average} </div>
        </div>

    </div>
  )
}

export default Movies