import './App.css'
import Home from './components/_home/Home'
import Navbar from './components/_navbar/Navbar'
import Pricing from './components/_pricing/Pricing'
import Signup from './components/_auth/_signup/Signup'
import Login from './components/_auth/_login/Login'
import Footer from './components/_footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Ad from './components/_ad/Ad'

function App() {
  return (
    <>
      <Navbar />
      {/* <Ad /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
