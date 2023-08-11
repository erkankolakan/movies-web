import React from 'react'
import './globals.css' //tüm sayfalarda kullanabilelim diye layout sayfasına yazdım.
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Providers from './Providers'

const layout = ({children}) => {
  return (
    <html lang="en">
        {/* <title>sekme başlığı</title> */}
        <body> 
          <Providers>
            <Header/>
              {children}
            <Footer/>
          </Providers>
        </body>
    </html>
  )
}

export default layout

//Dışarıdan alınan değerin mutlaka html tagralı içerisinde body tagı arasında olması gerekir.
//Header ve footer kısımları her sayfada gözüksün diye lyout sayfasında çağırdık.