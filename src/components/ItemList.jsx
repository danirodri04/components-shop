import Item from "./Item"


const ItemList = ({datos}) => {
  return (
    <>
      <div className ="row gap-4">
       {datos.map((item) => (
        <Item item={item} key={item.id} />
       ))}
      </div>
    </>
  )
}

export default ItemList;