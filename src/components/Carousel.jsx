import {React, useRef, useEffect,useState} from 'react'
import { motion, useMotionValue, clamp , useTransform} from "framer-motion"
import images from "../images.js"

const Carousel = () => {
    const [width, setWidth] = useState(0)
    const carouselRef = useRef()

  const containerRef = useRef(null);
    const x = useMotionValue(0);
    
   

    useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    const container = containerRef.current;

    const handleScroll = (e) => {
       const delta = e.deltaY || e.deltaX;
  const newX = x.get() + delta * 0.2;
  const clampedX = clamp(newX, 0, -width );
  x.set(clampedX);
    };

    container.addEventListener('wheel', handleScroll);

    return () => {
      container.removeEventListener('wheel', handleScroll);
    };
    }, [width, x]);

    // scale the center image
  
    
    
    
  return (
      <div
          ref={containerRef}
          className='absolute top-[5rem] left-[5%] right-[5%]'
      >
          <motion.div
              ref={carouselRef}
          className='carousel overflow-hidden mx-[6%] '
          >
        <motion.div style={{x}} drag="x" dragElastic={0.4} dragConstraints={{right:0, left: -width  }} className='inner-carousel flex '>
                  {images.map((image, index) => {
                      
                      return (
                          <motion.div key={index}  className='item h-[40rem] min-w-[26rem] p-[40px] cursor-pointer'>
                              <img alt='carousel pics' src={ image} className='w-[100%] h-[100%] rounded-[2rem] pointer-events-none' />
                  </motion.div>
              )
          })}
       </motion.div>
     </motion.div>
    </div>
  )
}

export default Carousel