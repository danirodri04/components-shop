import React from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'





const App = () => {
  return (
    <> 
      <Navbar />
      <ItemListContainer msg = "Hola mundo ItemListContainer!!!" />
      <ItemCount />
      
    </>
  )
}

export default App;
