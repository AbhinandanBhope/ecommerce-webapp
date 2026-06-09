import './App.css'
import Content from './components/Content';
import Header from "./components/Header";
import Listing from './components/Listing';
import Footer from './components/Footer';
import { useState } from 'react';
function App() {
  let [cartItems, setCartItems] = useState([
        { id: 101, title: "Album 1", price: 12.99, quantity: 1 },
        { id: 102, title: "Album 2", price: 9.99, quantity: 2 },
    ]);

    const addCartItem = (newItem:any) => {
      setCartItems((prev:any)=>{
        const existingItem = prev.find((item:any) => 
          (item.id && newItem.id && item.id === newItem.id) || (item.title === newItem.title)
        );
        if (existingItem) {
          return prev.map((item:any) => 
            ((item.id && newItem.id && item.id === newItem.id) || (item.title === newItem.title))
              ? { ...item, quantity: (item.quantity || 0) + 1 }
              : item
          );
        }
        return [...prev , { ...newItem, quantity: 1 }];
      });
    };

    const removeCartItem = (indexToRemove: number) => {
      setCartItems((prev: any) => prev.filter((_: any, idx: number) => idx !== indexToRemove));
    };
  

  return (
    <>
    <Header addCartItem={addCartItem} removeCartItem={removeCartItem} cartItems={cartItems} />
    <Content/>
    <Listing addCartItem={addCartItem} cartItems={cartItems} />
    <Footer/>
    </>
  )
}


export default App
