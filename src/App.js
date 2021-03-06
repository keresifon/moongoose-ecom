import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import auth from './services/authService';
import NavBar from './component/NavBar';
import Products from './component/product/Products';
import ProductDetails from './component/product/ProductDetails';
import Home from './component/Home';
import Footer from './component/Footer';
import ProductCategory from './component/product/ProductCategory';
import Cart from './component/product/Cart';
import { CartProvider, UserProvider, OrderProvider, ImgUpProvider  } from './context/Context';
import LoginForm from './component/LoginForm';
import Logout from './component/Logout';
import Register from './component/Register';
import Checkout from './component/checkout/Checkout';
import AddProduct from './component/product/AddProduct';
//import UpdateTest from './component/product/UpdateTest';
import ThankYou from './component/checkout/ThankYou';




function App(props) {
	const [cart, setCart] = useState([]);
	const [user, setUser] = useState({});
	const [order, setOrder] = useState({});
	const [imageUrl, setImageUrl] = useState('')

	useEffect(() => {
		const user = auth.getCurrentUser();
		setUser(user);
	}, []);

	return (
		<>
			<CartProvider value={[cart, setCart]}>
			 <OrderProvider value = {[order, setOrder]}	>
             <ImgUpProvider value = { [imageUrl, setImageUrl]}>
					<UserProvider value={user}>
						<NavBar />
						<div className="pb-100">
							<Switch>
								<Route path="/products/:id" component={ProductDetails} />
								<Route path="/product/:category" component={ProductCategory} />
								<Route path="/products" component={Products} />
								<Route path="/cart/:id?" component={Cart} />
								<Route path="/login" component={LoginForm} />
								<Route path="/logout" component={Logout} />
								<Route path="/register" component={Register} />
								<Route path="/checkout" component={Checkout} />
								<Route path="/addproduct" component={AddProduct} />
								<Route path="/thankyou" component={ThankYou} />
								{/* <Route path="/test" component={UpdateTest} /> */}

								<Route path="/" component={Home} />
							</Switch>
						</div>
						<div className="p-5"></div>

						<Footer />
					</UserProvider>
					</ImgUpProvider>
					</OrderProvider>
			</CartProvider>
		</>
	);
}

export default App;
