import React, { useState } from 'react'


const ItemCount = () => {

    const [contador, setContador] = React.useState(0)

    return (
      <div>
          <p>Nuestro numero aumentando: {contador}</p>
          <button onClick={() => setContador(contador + 1)}>+</button>
          <button onClick={() => setContador(contador - 1)}>-</button>
      </div>
    )
  
}

export default ItemCount