import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Cart from './pages/Cart';
import Home from './pages/Home'
import Products from './pages/Products';


// const  App = ()=> {
//   return ( 
//     // REact Fragment
//   <>
//     <h1>Welcome to my world</h1>,
//     <h5>Welcome To my world 2nd Time</h5>
//   </>
//   ); 
// }

const App = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        
      </Routes>

    </div>
  ); 
};

export default App;
