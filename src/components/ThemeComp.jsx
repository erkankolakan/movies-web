"use client"
import React,{useEffect, useState} from 'react'
import { HiMoon } from 'react-icons/hi'
import { BsFillSunFill } from 'react-icons/bs'


import { useTheme } from 'next-themes'

const ThemeComp = () => {

    const [mounted, setMounted] = useState(false)
    const {systemTheme, theme, setTheme } = useTheme()
//systemTheme aslında web sayfamın anlık olarak dark mod mu yoksa light mod mu ona bakıyor. Bu döküman içinde yok ama bizim sonradan mutlaka eklememiz gerekiyor.
    useEffect(() => {
        setMounted(true)
    }, [])

    const themeMode = theme === "system" ? systemTheme : theme
    console.log(mounted,"2121")

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
