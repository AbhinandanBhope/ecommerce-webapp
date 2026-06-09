import './App.css'
import Content from './components/Content';
import Header from "./components/Header";
import Listing from './components/Listing';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Header />
      <Content />
      <Listing />
      <Footer />
    </CartProvider>
  )
}


export default App
