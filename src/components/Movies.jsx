"use client"
import React from 'react'
import Image from 'next/image'

const Movies = ({dt}) => {

  return (
    //resimlere özellik vermke için resmi nerden gönderdiiysek 
    <div >
        <Image width={400} height={300} src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`}  />
    </div>
  )
}

export default Movies