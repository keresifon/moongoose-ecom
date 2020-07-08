import React from 'react';
import {Route,  Switch } from 'react-router-dom'
import './App.scss';
import Layout from './component/Layout';
import Products from './component/product/Products';
import ProductDetails from './component/product/ProductDetails'
import Home from './component/Home';





function App() {
  return (
    <>
    <Layout>
   
      <div className="vh-100">
      <Switch>
      <Route path="/products/:id" component={ProductDetails} />
      <Route path="/products" component={Products} />
      <Route path="/home" component={Home} />
      </Switch>
      </div>
      <div className="p-5"></div>
      </Layout>
     
   </>
  );
}

export default App;
