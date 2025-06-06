
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






import React, { useEffect, useRef } from 'react'
import chef1 from '../assets/chef1.jpg'
import chef2 from '../assets/chef2.webp'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SecondPart = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const image = imageRef.current
    const text = textRef.current

    // Fade up text on scroll
    gsap.from(text.querySelectorAll('.fade-text'), {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: text,
        start: 'top 80%',
      },
    })

    // Parallax image effect
    gsap.to(image, {
      y: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, [])

  return (
    <section ref={sectionRef} className="bg-neutral-950 text-white">
      {/* Mobile view */}
      <div className='sm:hidden text-center p-4'>
        <div ref={imageRef}>
          <img src={chef2} className='w-full h-auto rounded-2xl mb-4' />
        </div>
        <div ref={textRef}>
          <h3 className='text-3xl font-medium mb-2 fade-text'>More than just a restaurant</h3>
          <hr className='mb-4 fade-text' />
          <h6 className='text-xl font-bold mb-2 fade-text'>ABOUT THE RESTAURANT</h6>
          <p className='text-sm mb-4 fade-text'>
            Our journey is rooted in a love for fresh, high-quality ingredients and a dedication to crafting dishes that blend tradition with innovation.
          </p>
          <button className="fade-text px-3 py-2 bg-white/10 backdrop-blur-lg border border-white/40 text-white rounded shadow-md text-sm">
            More about Kofeo
          </button>
        </div>
      </div>

      {/* Desktop view */}
      <div className='hidden sm:flex text-left p-8 gap-8 items-center'>
        <div className='flex-1' ref={textRef}>
          <h3 className='text-4xl font-medium sm:mb-5 mb-20 fade-text'>More than just a restaurant</h3>
          <h6 className='text-xl font-bold sm:mb-2 mb-6 fade-text'>ABOUT THE RESTAURANT</h6>
          <p className='text-sm mb-15 max-w-96 fade-text'>
            Our journey is rooted in a love for fresh, high-quality ingredients and a dedication to crafting dishes that blend tradition with innovation.
          </p>
          <button className="fade-text px-4 py-2 bg-white/10 backdrop-blur-lg border border-white/40 text-white rounded shadow-md text-lg">
            More about Kofeo
          </button>
          <img src={chef1} className='w-full h-auto rounded-1xl mt-10 fade-text' />
        </div>
        <div className='flex-1 flex flex-col gap-4' ref={imageRef}>
          <img src={chef2} className='w-full h-auto rounded-1xl sm:h-145 md:h-auto' />
        </div>
      </div>
    </section>
  )
}

export default SecondPart
