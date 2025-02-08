import {cart} from '../data/cart.js'
import {products} from '../data/products.js'

let productsHTML = '';

products.forEach((product) => {
	productsHTML += `
	<div class="product-container">
	<div class="product-image-container">
		<img class="product-image"
			src="${product.image}">
	</div>

	<div class="product-name limit-text-to-2-lines">
		${product.name}
	</div>

	<div class="product-rating-container">
		<img class="product-rating-stars"
			src="images/ratings/rating-${product.rating.stars * 10}.png">
		<div class="product-rating-count link-primary">
			${product.rating.count}
		</div>
	</div>

	<div class="product-price">
		$${(product.priceCents / 100).toFixed(2)}
	</div>

	<div class="product-quantity-container">
		<select>
			<option selected value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
			<option value="6">6</option>
			<option value="7">7</option>
			<option value="8">8</option>
			<option value="9">9</option>
			<option value="10">10</option>
		</select>
	</div>

	<div class="product-spacer"></div>

	<div class="added-to-cart">
		<img src="images/icons/checkmark.png">
		Added
	</div>

	<button class="add-to-cart-button button-primary js-to-cart-button" data-product-id="${product.id}">
		Add to Cart
	</button>
</div>
	`
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;
document.querySelectorAll('.js-to-cart-button').forEach((elem) => {
	elem.addEventListener('click', ()=>{
		add_to_cart(elem);
		console.log(cart);
	});
});

function add_to_cart(elem){
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