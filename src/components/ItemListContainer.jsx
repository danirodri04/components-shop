import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { customFetch } from './utils/customFetch'
import { data } from './utils/data'
import ItemList from '../components/ItemList'
import Item from '../components/Item'
import ItemDetail from '../components/ItemDetail'




const ItemListContainer = () => {
const [datos, setDatos] = useState([])

useEffect(() => {
  getData();
}, [])

const getData = async () => {
  try {
    const resp = await getItems()
    setDatos(resp)
  } catch (err){
    console.log(err)
  }
}

const getItems = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000)
  })
}

  return (
    <>
   <div className='list-container'>
        <ItemList datos={datos} />
   </div>
       
        </>
        )
      }

export default ItemListContainer;