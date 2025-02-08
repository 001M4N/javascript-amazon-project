// let products = [
// {
//   name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
//   image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
//   rating: {
//     stars: 4.5,
//     counts: 87
//   },
// 	priceCents: 1090
// },
// {
//   name: 'Intermediate Size Basketball',
//   image: 'images/products/intermediate-composite-basketball.jpg',
//   rating: {
//     stars: 4,
//     counts: 127
//   },
// 	priceCents: 2095
// },
// {
// 	name: 'Adults Plain Cotton T-Shirt - 2 Pack',
// 	image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
// 	rating: {
// 	  stars: 4.5,
// 	  counts: 56
// 	},
// 	  priceCents: 799
// },
// {
// 	image: 'images/products/black-2-slot-toaster.jpg',
// 	name: '2 Slot Toaster - Black',
// 	rating: {
// 		stars: 5,
// 		counts: 2197
// 	},
// 	priceCents: 1899
// }
// ];

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
}