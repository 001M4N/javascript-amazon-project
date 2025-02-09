export const cart = [
	{
		productId: '54e0eccd-8f36-462b-b68a-8182611d9add',
		Quantity: 2
	},
	{
		productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
		Quantity: 1		
	}
]

export function add_to_cart(elem){
	const productId = elem.dataset.productId;
	let flag = 0;
	cart.forEach((item) => {
		(item.productId===productId) && (item.Quantity += 1) && (flag = 1);
	});

	(flag === 0) && (cart.push({productId, Quantity:1}));

	cart_quanity()
}

function cart_quanity(){
	let num_items_in_cart = 0;
	cart.forEach((item) => {
		num_items_in_cart += item.Quantity;
	});
	document.querySelector('.js-cart-quantity').innerHTML = num_items_in_cart;
	console.log(num_items_in_cart)
}