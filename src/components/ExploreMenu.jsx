import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const ExploreMenu = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/menu') // this assumes you have a route set for /menu
  }

  return (
    <div className='bg-neutral-800 h-50 w-screen flex flex-col items-center justify-center p-8 text-white'>
      <h2 className='text-2xl font-bold mb-4'>Crafting Memorable Experiences</h2>
      <button 
        onClick={handleClick} 
        className='flex items-center gap-2 bg-white text-neutral-800 px-4 py-2 rounded hover:bg-neutral-300 transition'
      >
        Explore Menu
        <ArrowRight size={20} />
      </button>
    </div>
  )
}

export default ExploreMenu
