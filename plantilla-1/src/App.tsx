import React from 'react'
import AOS from "aos"
import Navbar from './components/Navbar'
import Home from './components/Home'

AOS.init()

const App = (): React.ReactElement => {
  return (
    <>
    <Navbar />
    <Home/>
    </>
  )
}

export default App