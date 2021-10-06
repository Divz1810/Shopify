import React, { useState, useEffect} from 'react';
import { commerce } from './lib/commerce';
import {Products , Navbar , Cart} from './components';

const App=()=> {

  const [products, setProducts] = useState([]);
  const [cart, setCart]= useState({});

//fetchProducts is an async function that fetch all the products and update state i.e products
  const fetchProducts = async () => {
    const { data }= await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async() =>{
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity) =>{
    const response = await commerce.cart.add(productId, quantity);
  }

//useEffect will call the function fetchProducts only once. after first render
  useEffect(()=>{
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <div>
      <Navbar totalItems= {cart.total_items} />
      {/* <Products products= {products} onAddToCart={handleAddToCart} /> */}
      <Cart cart={cart}/>
    </div>
  );
}

export default App;
