import React from 'react'
import Hero from './components/Hero'
import SecondPart from './components/SecondPart'
import SignatureDish from './components/SignatureDish'
import Appetizer from './components/Appetizer'


const App = () => {
  return (
    <div className='bg-neutral-950 overflow-x-hidden'>
    
      <Hero />
      <SecondPart />
    <SignatureDish />
    <Appetizer />
    </div>
  )
}

export default App