import React from 'react'
import { useRef, useState } from 'react'
import SplashScreen from './SplashScreen'
import { motion, animate } from 'framer-motion'
import Carousel from '../components/Carousel'

const Home = () => {
   
    const scaleRef = useRef()
const [isAnimating, setIsAnimating] = useState(false)
    const handleClick = () => {
       setIsAnimating(!isAnimating)
    }
    

  
    
  return (
      <div className='bg-black w-screen h-screen'>
          <SplashScreen/>
          <div className='w-screen px-5 '> <h1 className='text-white text-[12.5rem] p-0 -mt-[5px] text-center '>S<span className='italic'>O</span>NDERF<span className='italic transform -skew-x-12'>O</span>RM</h1></div>
          <Carousel/>
          <motion.div
             
              style={{height: isAnimating ? 300 : "60px", width: isAnimating ? 300: "60px"}}
              animate={{ height: isAnimating ? 300 : "60px", width: isAnimating ? 300 : "60px" }}
              exit={{height: "60px", width: "60px"}}
              transition={{duration: 0.1,  ease: "easeIn"}}
              className='overflow-hidden rounded-[35px] bg-[#d5fca2] px-[1.3rem] py-[1rem] absolute bottom-5 right-5    duration-700 ease-in-out'>
              <motion.div
                  initial={{ scale: 0,  opacity: 0, x: 500, y:500}}
                  animate={{ scale: isAnimating ? [0.5, 1] : 0, opacity: isAnimating ? 1 : 0 , x: isAnimating ? 0 : 500 , y: isAnimating ? 0 :500}}
                  exit={{x: -500, y:-500}}
                  transition={{duration: 0.7,  ease: "easeInOut"}}
                  className='space-y-5 pt-5 '>
                  <p className='text-2xl hover:opacity-70 duration-700 cursor-pointer'>Projects</p>
                  <p className='text-2xl hover:opacity-70 duration-700 cursor-pointer'>Studio</p>
                  <p className='text-2xl hover:opacity-70 duration-700 cursor-pointer'>Say Hey@<br/>sonderform.com</p>
                  <div className='flex items-center space-x-4 text-xs pt-3'>
                      <p className='hover:opacity-70 duration-700 cursor-pointer'>Impressum</p>

                      <p className='hover:opacity-70 duration-700 cursor-pointer'>Datenshutz</p>
                 </div>
              </motion.div>
              
              <div onClick={handleClick} className='cursor-pointer absolute bottom-3 right-4'><motion.i animate={{ rotate: isAnimating ? -45 : 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="fa-solid fa-plus text-3xl "></motion.i></div></motion.div>
      </div>
  )
}

export default Home