import React from 'react'


function Button({ album, addCartItem, cartItems }:any) {
//  console.log("album",album)

  
  return (
     <div className="text-right">
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => {addCartItem(album)}}>
        Button
      </button>
    </div>
  )
}

export default Button