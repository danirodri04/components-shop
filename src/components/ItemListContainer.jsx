import React from 'react'
import ItemCount from './ItemCount';


const ItemListContainer = (props) => {
  return (
    <>
    <div>
       {props.msg}
       <ItemCount />
    </div>
    
    </>
  )
}

export default ItemListContainer;