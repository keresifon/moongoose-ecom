import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import NavBar from './component/NavBar';
import Products from './component/product/Products';
import ProductDetails from './component/product/ProductDetails';
import Home from './component/Home';
import Footer from './component/Footer';
import ProductCategory from './component/product/ProductCategory';
import Cart from './component/product/Cart';
import { CartProvider } from './CartContext';

function App() {
	const [cart, setCart] = useState([]);
	return (
		<>
			<CartProvider value={[cart, setCart]}>
				<NavBar />
				<div className="pb-100">
					<Switch>
						<Route path="/products/:id" component={ProductDetails} />
						<Route path="/product/:category" component={ProductCategory} />
						<Route path="/products" component={Products} />
						<Route path="/cart/:id?" component={Cart} />

						<Route path="/" component={Home} />
					</Switch>
				</div>
				<div className="p-5"></div>

				<Footer />
			</CartProvider>
		</>
	);
}

export default App;
