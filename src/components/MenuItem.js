import React from 'react'

const MenuItem = props => {

  const [selected, setSelected] = React.useState(false)
  const toggleSelected = () => {
    if (selected) {
      props.removePurchasedItem(props.name)
    } else {
      props.addPurchasedItems({
        name: props.name,
        price: props.price
      })
    }
    setSelected(!selected)
  }

  return (
    <button onClick={toggleSelected} class={selected ? 'menu-item selected' : 'menu-item'}>
      <img src={props.picture} alt={props.name} />
      <dt>{props.name}</dt>
      <dd>{props.price}</dd>
    </button>
  )
}

export default MenuItem
