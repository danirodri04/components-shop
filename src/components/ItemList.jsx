import Item from "./Item"


const ItemList = ({datos}) => {
  return (
    <>
      <div className ="row d-flex gap-4 justify-content-center">
       {datos.map((item) => (
        <Item item={item} key={item.id} />
       ))}
      </div>
    </>
  )
}

export default ItemList;