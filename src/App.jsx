// import React from 'react'
// import Hero from './components/Hero'
// import SecondPart from './components/SecondPart'
// import SignatureDish from './components/SignatureDish'
// import Appetizer from './components/Appetizer'
// import MainDish from './components/MainDish'
// import ExploreMenu from './components/ExploreMenu'


// const App = () => {
//   return (
//     <div className='bg-neutral-950 overflow-x-hidden'>
    
//       <Hero />
//       <SecondPart />
//     <SignatureDish />
//     <Appetizer />
//     <MainDish />
//     <ExploreMenu />
//     </div>
//   )
// }

// export default App



// main.jsx or index.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import MenuPage from './pages/MenuPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
