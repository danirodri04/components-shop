import React from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemCount from './components/ItemCount'






const App = () => {
  return (
    <> 
      <Navbar />
      {/* <ItemDetailContainer /> */}
       <ItemListContainer /> 
      {/* <ItemCount /> */}
      
    </>
  )
}

export default App;
