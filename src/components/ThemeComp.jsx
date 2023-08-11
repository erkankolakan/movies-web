"use client"
import React,{useEffect, useState} from 'react'
import { useTheme } from 'next-themes'
import { HiMoon } from 'react-icons/hi'
import { BsFillSunFill } from 'react-icons/bs'

const ThemeComp = () => {

    const [mounted, setMounted] = useState(true)
    const {systemTheme, theme, setTheme } = useTheme()
//systemTheme aslında web sayfamın anlık olarak dark mod mu yoksa light mod mu ona bakıyor. Bu döküman içinde yok ama bizim sonradan mutlaka eklememiz gerekiyor.
//amam ondan da önemlisi theme sayfanın dark mı yoksa light mı olduğunu bize söylüyor.


// useEffect(() => {
//     setMounted(true)
// }, [])
//sayfa ilk yüklendiği mounted in true false dengesini bulursan üsteki useEffect e ihtiyacın kalmaz. useState(ture) olarka başladığı zaman icon gözükmüyor.

    const themeMode = theme === "system" ? systemTheme : theme

  return (
    <div>
        {
            mounted && (
                themeMode === "dark" ?
                <HiMoon onClick={() => setTheme("light")}  className='cursor-pointer' size={25}/>
                :
                <BsFillSunFill onClick={() => setTheme("dark")} className='cursor-pointer' size={25}/>
            )
        }
    </div>
  )
}

export default ThemeComp

//benim mountet özelliğim varsa yani ture ise içerisine gir
