import React from 'react'
import { motion } from 'framer-motion'
const SplashScreen = () => {
  return (
      <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -900] }}
          transition={{duration: 1, delay: 1.5}}
     className='flex items-center justify-center bg-[#d5fca2] w-screen h-screen absolute rounded-[40px] z-10 '>
           <h1 className='text-black text-3xl   text-center '>S<span className='italic'>O</span>NDERF<span className='transform -skew-x-12 italic'>O</span>RM</h1>
    </motion.div>
  )
}

export default SplashScreen