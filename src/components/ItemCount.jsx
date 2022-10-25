import React, { useState } from 'react'



const ItemCount = () => {

    const [contador, setContador] = React.useState(0)

    return (
      <>
      <div>
          <button className='boton+' onClick={() => setContador(contador + 1)}>+</button> <span>{contador}</span>
          <button className='boton-' onClick={() => setContador(contador - 1)}>-</button>
      </div>
      </>
    )
  
}

export default ItemCount