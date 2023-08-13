"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"


    const getMovie = async(id) => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ad865d6b81a7bf7d4dcc774d2ed3d700`)
        return await res.json() 
    }


const Page = async({params}) => {

    const id = params.id

    const movieDetail = await getMovie(id)

    console.log(movieDetail)

   

    //burda tek yaptığımşey url üzerindeki id numarasına göre veri çekmek
  

  return (
    <motion.div className='relative p-7 h-[77vh]'
    
    initial={{opacity:0 ,scale:.9}}
    animate={{opacity:1,scale:1}}
    transition={{delay:0.5 ,duration:0.5}}
    >

        <Image style={{objectFit:'cover'}} className='px-12  relative' fill src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`}  />
        <div className='absolute left-[5rem] top-[5rem] '>
            <div className='text-5xl font-bold my-3'> {movieDetail?.title} </div>
            <div className='w-1/2'> {movieDetail?.overview} </div>
            <div className='w-1/2'> {movieDetail?.overview} </div>
            <div className='my-3'>{movieDetail?.release_date} - {movieDetail?.vote_average} </div>
            <div className=' my-2 border w-32 p-2 rounded-md text-center text-lg cursor-pointer hover:bg-white hover:text-black transition-[2s]'> Trail</div>
        </div>

    </motion.div>
  )
}

export default Page

4