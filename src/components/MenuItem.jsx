import React from 'react';

const MenuItem = ({ emoji, name, description, price, updateOrder }) => {
  const handleclick = () => updateOrder(name, price);

  return (
    <div className='menuitem__wrapper'>
      <div>
        <span role='img' aria-label='label' className='menuitem__emoji'>{emoji}</span>
      </div>

      <div className='menuitem__column'> 
        <div className='menuitem__name'>{name}</div>
        <div className='menuitem__description'>{description}</div>
        <button className='menuitem__button' onClick={handleclick}>Add to order</button>
      </div>

      <div className='menuitem__price'>
        ${price}.00
      </div>

    </div>
  )
}

export default MenuItem;