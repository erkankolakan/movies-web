
import React from 'react'
import Movies from '../components/Movies'


const page = async({searchParams}) => {

  console.log(searchParams.genre)

  const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"}?api_key=${"ad865d6b81a7bf7d4dcc774d2ed3d700"}`)

  //searchParams.genre soruuguladık var mı yok mu diye, eğer öyle bir parametre varsa uzantıdan gelen popular , upcoming gibi değerleri getir yoksa da sayfa boş kalmasın diye trending/all/day apisini getirmiş oluyoruz.

  const data = await res.json()
  console.log(data)
  
  return (
    <div className='flex flex-wrap justify-center items-center gap-10'>
      {
        data?.results?.map((dt, i) =>(
          <Movies key={i} dt={dt} />
        ))
      }
    </div>
  )
}

export default page
