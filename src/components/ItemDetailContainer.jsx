import { useEffect } from 'react'
import { useState } from 'react'
import { data } from './utils/data'
import ItemList from '../components/ItemList'


const ItemDetailContainer = () => {
const [dato, setDatos] = useState({})

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
      resolve(data.find);
    }, 2000)
  })
}

const found = data.find(element => element > [4])

  return (
    <>
   <div className='list-container'>
        <ItemList datos={dato} />
   </div>
       
        </>
        )
      }



      export default ItemDetailContainer; 