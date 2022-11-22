import React from 'react'

const ItemDetail = ({id, title, description, price, pictureUrl, stock}) => {

  return (
    <>
        {description}
        {stock}
    </>
  )
}

export default ItemDetail; 