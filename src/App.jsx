import React from 'react'
import Hero from './components/Hero'
import SecondPart from './components/SecondPart'
import SignatureDish from './components/SignatureDish'


const App = () => {
  return (
    <div className='bg-neutral-950 overflow-x-hidden'>
    
      <Hero />
      <SecondPart />
    <SignatureDish />
    </div>
  )
}

export default App