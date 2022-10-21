import React from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer msg = "Hola mundo ItemListContainer!!!" />
    </>
  )
}

export default App;
