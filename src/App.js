import React from 'react';
import {Route,  Switch } from 'react-router-dom'
import './App.scss';
import NavBar from './component/NavBar';
import Products from './component/product/Products';
import ProductDetails from './component/product/ProductDetails'
import Home from './component/Home';
import Footer from './component/Footer';
import ProductCategory from './component/product/ProductCategory';





function App() {
  return (
    <>
    
   <NavBar />
      <div className="pb-100">
      <Switch>
      <Route path="/products/:id" component={ProductDetails} />
      <Route  path="/product/:category" component={ProductCategory} />
      <Route path="/products" component={Products} />
      <Route path="/" component={Home} />
      </Switch>
      </div>
      <div className="p-5"></div>
     
     <Footer />
   </>
  );
}

export default App;
