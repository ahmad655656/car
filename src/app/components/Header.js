'use client'
import React, { useContext, useEffect, useState } from 'react'

//next image
import Image from 'next/image'
 //
 import { Link } from 'react-scroll'

 //components
 import SearchMobile from './SearchMobile'

 //media query hook
import {useMediaQuery} from 'react-responsive'

//icons
import { BiMenuAltRight, BiX } from 'react-icons/bi'
import { SearchContext } from '../context/Search'
const Header = () => {
  const {setSearchActive} = useContext(SearchContext)
  const [header, setHeader] = useState(false)
  const [nav, setNav] = useState(false)

  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  })
  useEffect(() => {
    const handleScroll = () =>{
      if (window.scrollY > 40){
        setHeader(true)
      }
      else{
         setHeader(false)
      }

      //search
      if(window.scrollY > 530){
        setSearchActive(true)
      }
      else{
        setSearchActive(false)
      }
    }

    // add event listner
    window.addEventListener('scroll', handleScroll)

    // remove event listner
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[desktopMode])

  return (
    <header className={`${header ? "bg-white shadow-md py-2" : "bg-transparent shadow-none py-4"} fixed w-full max-w-[1920px] mx-auto z-20 duration-300 transition-all`}>
      <div className='flex flex-col mx-auto xl:container xl:flex-row xl:items-center xl:justify-between'>
        <div className='flex items-center justify-between px-4'>
          {/* logo */}
          <Link to="home" smooth={desktopMode} spy={true} className='cursor-pointer'  >
          <Image src={'/assets/icons/logo.svg'} width={194} height={64} alt="" />
          </Link>
          {/* nav open menu */}
          <div onClick={() => setNav(!nav)} className='cursor-pointer xl:hidden'>
            {nav ? <BiX className='text-4xl' /> : <BiMenuAltRight className='text-4xl' />}
          </div>
        </div>
        {/* nav */}
        <nav className={`${nav ? "py-30 h-[90vh] px-4 xl:py-0 xl:px-0 " : "max-h-0 xl:max-h-max"} flex flex-col w-full bg-white gap-y-3 overflow-hidden xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case font-bold xl:font-medium xl:flex-row xl:w-max`}>
          <Link className='cursor-pointer' to='home' activeClass='active' smooth={desktopMode} spy={true}>Home</Link>
          <Link className='cursor-pointer' to='cars' activeClass='active' smooth={desktopMode} spy={true}>Cars</Link>
          <Link className='cursor-pointer' to='about' activeClass='active' smooth={desktopMode} spy={true}>About</Link>
          <Link className='cursor-pointer' to='why' activeClass='active' smooth={desktopMode} spy={true}>Why us</Link>
          <Link className='cursor-pointer' to='testimonial' activeClass='active' smooth={desktopMode} spy={true}>Testimonial</Link>
          <Link className='cursor-pointer' to='contact' activeClass='active' smooth={desktopMode} spy={true}>Contact</Link>
          <Link className=' xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto' to='/' activeClass='active' smooth={desktopMode} spy={true}>See all cars</Link>
          <SearchMobile />
          
        </nav>
      </div>
    </header>
  )
}

export default Header