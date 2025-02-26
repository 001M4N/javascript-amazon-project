import {cart, add_to_cart, cart_quanity} from '../data/cart.js'
import {product, load_products_from_backend } from '../data/products.js'
import {cents_to_dollars} from "./utils/money.js";

function render_products(){
	let productsHTML = '';

	product.forEach((product) => {
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
				src="${product.showStars()}">
			<div class="product-rating-count link-primary">
				${product.rating.count}
			</div>
		</div>
	
		<div class="product-price">
			$${cents_to_dollars(product.priceCents)}
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
			const productId = elem.dataset.productId;
			add_to_cart(productId);
			console.log(cart);
		});
	});
	
	
	cart_quanity();
}


load_products_from_backend(render_products);