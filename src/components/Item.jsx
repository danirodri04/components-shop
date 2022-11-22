import React from 'react'

const Item = ({item}) => {

const {id, title, description, price, pictureUrl, stock} = item;
  return (
    <>
      <div className=' mx-auto card col-3 text-center mt-5' >
     <img src={pictureUrl} className="img-fluid mx-auto mt-5" width="350px"></img>
      <div className="cadr-body">
        <a href="#">
      <button type="button" class="btn btn-outline-warning">Detalle</button>
        </a>
        <p className='mt-1 fs-5'>
      <br />{title} 
      <br /> {price} 
        </p>
      </div>
      </div> 
  {/*     <div className="card" style="width: 18rem;">
  <img src="..." className="card-img-top" alt="..."></img>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}
     

    </>
  )
}

export default Item