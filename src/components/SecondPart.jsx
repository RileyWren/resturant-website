
// import React from 'react'
// import { motion } from 'framer-motion'
// import chef1 from '../assets/chef1.jpg'
// import chef2 from '../assets/chef2.webp'

// const SecondPart = () => {
//   return (
//     <>
//       {/* Mobile view */}
//       <div className='sm:hidden bg-neutral-950 text-white text-center p-4'>
//         <img src={chef2} className='w-full h-auto rounded-2xl mb-4' />
//         <h3 className='text-3xl font-medium mb-2'>More than just a restaurant</h3>
//         <hr className='mb-4' />
//         <h6 className='text-xl font-bold mb-2'>ABOUT THE RESTAURANT</h6>
//         <p className='text-sm mb-4'>
//           Our journey is rooted in a love for fresh, high-quality ingredients and a dedication to crafting dishes that blend tradition with innovation.
//         </p>
//         <motion.button
//           className="px-3 py-2 bg-white/10 backdrop-blur-lg border border-white/40 text-white rounded shadow-md text-sm"
//           whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
//           whileTap={{ scale: 0.95 }}
//           transition={{ type: "spring", stiffness: 400, damping: 10 }}
//         >
//           More about Kofeo
//         </motion.button>
//       </div>

//       {/* Desktop view */}
//       <div className='hidden sm:flex bg-neutral-950 text-white text-left p-8 gap-8 items-center'>
//         {/* Left side: text */}
//         <div className='flex-1'>
//           <h3 className='text-4xl font-medium sm:mb-5 mb-20'>More than just a restaurant</h3>
//           <br />
//           <h6 className='text-xl font-bold sm:mb-2 mb-6'>ABOUT THE RESTAURANT</h6>
//           <p className='text-sm mb-15 max-w-96'>
//             Our journey is rooted in a love for fresh, high-quality ingredients and a dedication to crafting dishes that blend tradition with innovation.
//           </p>
//           <motion.button
//             className="px-4 py-2 bg-white/10 backdrop-blur-lg border border-white/40 text-white rounded shadow-md text-lg"
//             whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
//             whileTap={{ scale: 0.95 }}
//             transition={{ type: "spring", stiffness: 400, damping: 10 }}
//           >
//             More about Kofeo
//           </motion.button>
//           <img src={chef1} className='w-full h-auto rounded-1xl mt-10' />

//         </div>

//         {/* Right side: images */}
//         <div className='flex-1 flex flex-col gap-4'>
//           <img src={chef2} className='w-full h-auto rounded-1xl sm:h-145 md:h-auto' />
//         </div>
//       </div>
//     </>
//   )
// }

// export default SecondPart







import React from 'react'
import { motion } from 'framer-motion'
import chef1 from '../assets/chef1.jpg'
import chef2 from '../assets/chef2.webp'

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const SecondPart = () => {
  return (
    <>
      {/* Mobile view */}
      <motion.div
        className='sm:hidden bg-neutral-950 text-white text-center p-4'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.img
          src={chef2}
          className='w-full h-auto rounded-2xl mb-4'
          variants={fadeUp}
        />
        <motion.h3 className='text-3xl font-medium mb-2' variants={fadeUp}>
          More than just a restaurant
        </motion.h3>
        <motion.hr className='mb-4' variants={fadeUp} />
        <motion.h6 className='text-xl font-bold mb-2' variants={fadeUp}>
          ABOUT THE RESTAURANT
        </motion.h6>
        <motion.p className='text-sm mb-4' variants={fadeUp}>
          Our journey is rooted in a love for fresh, high-quality ingredients and a dedication to crafting dishes that blend tradition with innovation.
        </motion.p>
        <motion.button
          className="px-3 py-2 bg-white/10 backdrop-blur-lg border border-white/40 text-white rounded shadow-md text-sm"
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          variants={fadeUp}
        >
          More about Kofeo
        </motion.button>
      </motion.div>

      {/* Desktop view */}
      <motion.div
        className='hidden sm:flex bg-neutral-950 text-white text-left p-8 gap-8 items-center'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        {/* Left side: text */}
        <motion.div className='flex-1' variants={fadeUp}>
          <motion.h3 className='text-4xl font-medium sm:mb-5 mb-20' variants={fadeUp}>
            More than just a restaurant
          </motion.h3>
          <motion.h6 className='text-xl font-bold sm:mb-2 mb-6' variants={fadeUp}>
            ABOUT THE RESTAURANT
          </motion.h6>
          <motion.p className='text-sm mb-15 max-w-96' variants={fadeUp}>
            Our journey is rooted in a love for fresh, high-quality ingredients and a dedication to crafting dishes that blend tradition with innovation.
          </motion.p>
          <motion.button
            className="px-4 py-2 bg-white/10 backdrop-blur-lg border border-white/40 text-white rounded shadow-md text-lg"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            variants={fadeUp}
          >
            More about Kofeo
          </motion.button>
          <motion.img
            src={chef1}
            className='w-full h-auto rounded-1xl mt-10'
            variants={fadeUp}
          />
        </motion.div>

        {/* Right side: image */}
        <motion.div className='flex-1 flex flex-col gap-4' variants={fadeUp}>
          <motion.img
            src={chef2}
            className='w-full h-auto rounded-1xl sm:h-145 md:h-auto'
            variants={fadeUp}
          />
        </motion.div>
      </motion.div>
    </>
  )
}

export default SecondPart
