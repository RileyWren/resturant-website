import React from 'react'
import Hero from './components/Hero'
import SecondPart from './components/SecondPart'
import SignatureDish from './components/SignatureDish'
import Appetizer from './components/Appetizer'
import MainDish from './components/MainDish'


const App = () => {
  return (
    <div className='bg-neutral-950 overflow-x-hidden'>
    
      <Hero />
      <SecondPart />
    <SignatureDish />
    <Appetizer />
    <MainDish />
    </div>
  )
}

export default App