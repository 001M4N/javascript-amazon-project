export let cart = (JSON.parse(localStorage.getItem('cart'))) || [];

export function add_to_cart(elem){
	const productId = elem.dataset.productId;
	let flag = 0;
	cart.forEach((item) => {
		(item.productId===productId) && (item.Quantity += 1) && (flag = 1);
	});

	(flag === 0) && (cart.push({productId, Quantity:1}));

	save_to_local_storage();
	cart_quanity();
}

export function cart_quanity(){
	let num_items_in_cart = 0;
	cart.forEach((item) => {
		num_items_in_cart += item.Quantity;
	});
	document.querySelector('.js-cart-quantity').innerHTML = num_items_in_cart;
	console.log(num_items_in_cart);
}


export function delete_item_from_cart(productId){
  let newCart = []
  cart.forEach((item) => {
	(item.productId !== productId) && newCart.push(item);
  });

  cart = newCart;
  save_to_local_storage();
}

export function save_to_local_storage(){
	localStorage.setItem('cart', JSON.stringify(cart));
}