import React from 'react'
import "../App.css"


const ItemCount = () => {

    const [contador, setContador] = React.useState(1)

    const Increment = () => {
      setContador(contador + 1)
    }

    const Decrement = () => {
        if(contador <= 1){
          setContador(1)
          alert ("No podes usar numeros negativos")
        } else {
          setContador(contador - 1)
        }
    }

    return (
      <>
      <div className='container-fluid'>
        <div className='d-block'>
          <button className = 'button btn btn-outline-success btn-lg' onClick={() => Increment()}>+</button>
            <span className = "contador fs-4">{contador}</span>
          <button className = 'button btn btn-outline-danger btn-lg' onClick={() => Decrement()}>-</button> 
          <button className = 'button btn btn-outline-primary'>ADD TO CART</button>
        </div>
      </div>
          
      </>
    )
  
}

export default ItemCount;