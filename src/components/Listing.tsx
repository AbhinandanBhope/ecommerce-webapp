import React from 'react'
import Button from './Button'

function Listing(props:any) { 
  const {addCartItem, cartItems } =props;
  

  const albums =  [{
    id:1 ,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  { id:2 ,
    title: 'Black and White Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  { id:3 ,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  { id:4 ,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },]

  const renderAlbums = () => (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-40">
        {albums.map((album) => (
          <div key={album.id} className="text-center">
            <h2 className="text-xl font-bold mb-2">
              {album.title}
            </h2>

            <div className="bg-gray-200 size-50 border-3 flex items-center justify-center mx-auto">
              <img src={album.imageUrl} alt={album.title} />
            </div>
            <div className="flex items-center justify-between mt-2">
  <h6 className="text-sm text-gray-600">
    {`$${album.price}.00`}
  </h6>

  <Button album={album} addCartItem={addCartItem} cartItems={cartItems} />
</div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <>
      {renderAlbums()}

      <h1 className="metal-mania text-5xl text-center my-10">
        MUSIC
      </h1>

      {renderAlbums()}
    </>
  )
}

export default Listing