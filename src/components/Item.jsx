import React from 'react'

const Item = ({item}) => {

const {id, title, description, price, pictureUrl, stock} = item;
  return (
    <>
     <div>
      {id} {title} {description} {price} {stock}
     </div>
     <img src={pictureUrl} className="img-thumbnail" width="100px"></img>

    </>
  )
}

export default Item