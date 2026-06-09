import { useState } from "react";
import { useCart } from "../context/CartContext";

function CartButton() {
    const [open, setOpen] = useState(false);
    const { cartItems, removeCartItem } = useCart();
  return (
    <>
      <button  className="relative bg-gray-800 text-white px-3 py-2 rounded" 
        onClick={() => setOpen(true)}>
        <img
          src="/icons8-cart.gif"
          alt="Cart"
          className="w-6 h-6"
        />
      </button>

      {open && (
  <div className="fixed inset-0 bg-black/60 z-50 flex justify-end" onClick={() => setOpen(false)}>
   <div className="w-80 h-full bg-white shadow-2xl flex flex-col justify-between text-zinc-950" onClick={(e) => e.stopPropagation()}>
     <div>
       <h1 className="metal-mania text-center text-2xl font-bold border-b py-4">
         CART
       </h1>
       <div className="p-4">
         <div className="grid grid-cols-4 border-b pb-2 font-bold text-sm">
           <div>Item</div>
           <div className="text-center">Price</div>
           <div className="text-center">Quantity</div>
           <div className="text-center">Action</div>
         </div>
         {cartItems && cartItems.length > 0 ? (
           cartItems.map((ele:any, idx:number)=>(
             <div key={idx} className="grid grid-cols-4 py-3 items-center text-sm border-b border-zinc-100">
               <div className="truncate pr-1">{ele.title || ele.name}</div>
               <div className="text-center">${ele.price}</div>
               <div className="text-center">{ele.quantity}</div>
               <div className="text-center">
                 <button 
                   onClick={() => removeCartItem && removeCartItem(idx)} 
                   className="bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1 rounded transition duration-150 cursor-pointer"
                 >
                   Remove
                 </button>
               </div>
             </div>
           ))
         ) : (
           <p className="text-center py-8 text-zinc-500">Your cart is empty.</p>
         )}
       </div>
     </div>

     <div className="flex justify-center pb-8 p-4 border-t border-zinc-100">
       <button
         onClick={() => setOpen(false)}
         className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-2 rounded transition cursor-pointer"
       >
         Close
       </button>
     </div>
   </div>
  </div>
)}
    </>
  );
  
}

export default CartButton;
