import React from 'react'


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
    <div>
      Page
    </div>
  )
}

export default Page
