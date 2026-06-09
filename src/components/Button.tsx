import React from 'react'
import { useCart } from '../context/CartContext'


function Button({ album }:any) {
  const { addCartItem } = useCart();

  
  return (
     <div className="text-right">
      <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer" onClick={() => {addCartItem(album)}}>
        Button
      </button>
    </div>
  )
}

export default Button