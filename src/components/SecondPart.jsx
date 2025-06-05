import React from 'react'
import { motion } from 'framer-motion';
import chef1 from '../assets/chef1.jpg'
import chef2 from '../assets/chef2.webp'


const SecondPart = () => {
  return (
    <>
    <div className='bg-neutral-950 text-white justify-center text-center'>
        <div >
            <img src={chef2} className='max-w-full h-auto pt-15 p-3 rounded-2xl' />
        </div>
        <h3 className='text-3xl/10 font-sans font-medium p-2'>More then just a resturant</h3>
        <hr className='p-5'></hr>
        <h6 className='text-xl p-3 font-medium '>ABOUT THE RESTAURANT</h6>
        <p className='text-sm p-4'>Our journey is rooted in a love for fresh, high-quality ingredients and a dedication to crafting dishes that blend tradition with innovation.</p>
         <motion.button 
                className="px-3 py-2 bg-white/10 backdrop-blur-lg border border-white/40 text-white rounded-xs shadow-md cursor-pointer z-40 relative"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.3)" 
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                More about Kofeo
              </motion.button>
    </div>
    </>
  )
}

export default SecondPart