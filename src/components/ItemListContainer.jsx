import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { customFetch } from '../utils/customFetch'
import { data } from '../utils/data'
import ItemList from '../components/ItemList'
import Item from '../components/Item'
import ItemDetail from '../components/ItemDetail'




const ItemListContainer = () => {

const [datos, setDatos] = useState([])



useEffect(() => {
  customFetch(2000, data)
    .then(response => setDatos(response))
    .catch(err => console.log(err)) 

}, [])


  return (
    <>
    {
      datos.map(item => (
        <ItemDetail 
        key={item.id}
        title = {item.title}
        description = {item.description}
        price = {item.price}
        pictureUrl = {item.pictureUrl}
        stock = {item.stock} />
      ))
    }
       <Item />
       <ItemList />
        </>
        )
      }

export default ItemListContainer;