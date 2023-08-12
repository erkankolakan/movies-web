import Movies from '@/components/Movies';
import React from 'react'

const page = async({params}) => {


    const keyword = params.keyword;
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${`ad865d6b81a7bf7d4dcc774d2ed3d700`}&query=${keyword}&language=en-US&include_adult=false                       `)
    const data = await res.json()

  return (
    <div>
        {
            !data?.results ? (
                <div>Aranılan sonuç bulunamadı</div>
            ) : (
                <div className='flex mx-12 items-center justify-center flex-wrap  gap-3'>
                    {
                    data.results.map((dt, i) => <Movies key={i} dt={dt} />)
                    }
                </div>
            )
        }
    </div>
  )
}

export default page
