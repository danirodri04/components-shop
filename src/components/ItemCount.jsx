import React from 'react'
import "../App.css"


const ItemCount = () => {

    const [contador, setContador] = React.useState(0)
    
    const Increment = () => {
      setContador(contador + 1)
    }

    const Decrement = () => {
        if(contador <= 0){
          setContador(0)
          alert("No podes poner valores menores a 0")
        } else {
          setContador(contador - 1)
        }
    }
    
    return (
      <>
      <div className='container-fluid'>
          <button className = 'button btn btn-outline-success btn-lg' onClick={() => Increment()}>+</button>
            <span className = "contador fs-4">{contador}</span>
          <button className = 'button btn btn-outline-danger btn-lg' onClick={() => Decrement()}>-</button> 
          <button className = 'button btn btn-outline-primary'>ADD TO CART</button>
      </div>
          
      </>
    )
  
}

export default ItemCount;