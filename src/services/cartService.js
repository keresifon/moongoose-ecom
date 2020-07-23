

function ShoppingCart(cart, products, qty, setCart) {
	return () => {
		let currCart = [...cart].map(item => item._id);
		const cartItem = { _id: products._id, name: products.name, image: products.image, price: products.price, qty: qty };

		if (currCart.includes(cartItem._id)) {
			return;
		}
		else {
			setCart(cart => [...cart, cartItem]);
		}
	};
}

function ShoppingBasket(cart, qty, setCart) {
	return (product) => {
		let currCart = [...cart].map(item => item._id);
		const cartItem = { _id: product._id, name: product.name, image: product.image, price: product.price, qty: qty };
		if (currCart.includes(cartItem._id)) {
			return;
		}
		else {
			setCart(cart => [...cart, cartItem]);
		}


	};
}

export { ShoppingCart , ShoppingBasket }

